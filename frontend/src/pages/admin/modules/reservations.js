// Template-cloning reservations module (restored)

function createReservationElement(reservation, index) {
  var tpl = document.getElementById('reservation-template');
  if (!tpl) return document.createElement('div');
  var node = tpl.content.firstElementChild.cloneNode(true);
  var id = (reservation && (reservation.id || reservation._id)) || (index + 1);
  node.setAttribute('data-original', id);

  var setField = function(field, value) {
    var el = node.querySelector('.field-' + field);
    if (el) el.textContent = value || '';
  };

  setField('Naam', reservation && (reservation.naam || reservation.Naam));
  setField('Aankomst', reservation && (reservation.aankomst || reservation.Aankomst));
  setField('Vertrek', reservation && (reservation.vertrek || reservation.Vertrek));
  setField('Plaats', reservation && (reservation.plaats || reservation.Plaats));
  setField('Contact', reservation && (reservation.contact || reservation.Contact));
  setField('Status', reservation && (reservation.status || reservation.Status));

  var title = node.querySelector('.reservation-id');
  if (title) title.textContent = id;

  var details = node.querySelector('.reservation-details');
  if (details) details.hidden = true;
  node.setAttribute('aria-expanded', 'false');

  return node;
}

// Main setup
export async function setupReservationsPage() {
  var container = document.querySelector('.reservations-list');
  var modal = document.getElementById('reservation-modal');
  var form = document.getElementById('reservation-form');
  var searchInput = document.getElementById('search-input');
  var searchToggle = document.getElementById('search-toggle');
  var sortToggle = document.getElementById('sort-toggle');
  var sortMenu = document.getElementById('sort-menu');

  if (!container) return;

  async function fetchReservations() {
    try {
      var r = await fetch('/api/reservations');
      return r.ok ? await r.json() : [];
    } catch (e) {
      console.error('fetch reservations failed', e);
      return [];
    }
  }

  var reservations = await fetchReservations();
  container.innerHTML = '';
  reservations.forEach(function(r, i) { container.appendChild(createReservationElement(r, i)); });

  var originalOrder = Array.prototype.slice.call(container.children);

  // Delegated click handler
  container.addEventListener('click', function(e) {
    var editBtn = e.target.closest ? e.target.closest('.edit-button') : null;
    if (editBtn) {
      e.stopPropagation();
      var block = editBtn.closest('.reservation-block');
      if (!block || !form) return;
      var getField = function(label) {
        var rows = block.querySelectorAll('tr');
        for (var i = 0; i < rows.length; i++) {
          var th = rows[i].querySelector('th');
          if (th && th.textContent.trim() === label) {
            var td = rows[i].querySelector('td');
            return td ? td.textContent.trim() : '';
          }
        }
        return '';
      };
      form.dataset.editing = block.getAttribute('data-original') || '';
      if (form.naam) form.naam.value = getField('Naam');
      if (form.aankomst) form.aankomst.value = getField('Aankomst');
      if (form.vertrek) form.vertrek.value = getField('Vertrek');
      if (form.plaats) form.plaats.value = getField('Plaats');
      if (form.contact) form.contact.value = getField('Contact');
      if (modal) modal.classList.remove('hidden');
      return;
    }

    var block = e.target.closest ? e.target.closest('.reservation-block') : null;
    if (!block) return;
    var details = block.querySelector('.reservation-details');
    var expanded = block.getAttribute('aria-expanded') === 'true';
    block.setAttribute('aria-expanded', String(!expanded));
    if (details) details.hidden = expanded;
  });

  // Keyboard toggle
  container.addEventListener('keydown', function(e) {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    var block = e.target.closest ? e.target.closest('.reservation-block') : null;
    if (!block) return;
    if (e.target.closest && e.target.closest('.edit-button')) return;
    e.preventDefault();
    var details = block.querySelector('.reservation-details');
    var expanded = block.getAttribute('aria-expanded') === 'true';
    block.setAttribute('aria-expanded', String(!expanded));
    if (details) details.hidden = expanded;
  });

  // Search
  if (searchToggle && searchInput) {
    searchToggle.addEventListener('click', function() {
      searchInput.classList.toggle('hidden');
      if (!searchInput.classList.contains('hidden')) searchInput.focus();
    });
    searchInput.addEventListener('input', function() {
      var q = searchInput.value.trim().toLowerCase();
      Array.prototype.forEach.call(container.children, function(b) {
        var naam = (b.querySelector('.field-Naam') && b.querySelector('.field-Naam').textContent.trim().toLowerCase()) || '';
        b.style.display = naam.indexOf(q) !== -1 ? '' : 'none';
      });
    });
  }

  // Sort
  if (sortToggle && sortMenu) {
    sortToggle.addEventListener('click', function() { sortMenu.classList.toggle('hidden'); });
    Array.prototype.forEach.call(sortMenu.querySelectorAll('button'), function(btn) {
      btn.addEventListener('click', function() {
        var sortType = btn.dataset.sort;
        var blocks = Array.prototype.slice.call(container.children);
        Array.prototype.forEach.call(sortMenu.querySelectorAll('button'), function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
        if (sortType === 'name') {
          blocks.sort(function(a, b) {
            var naamA = (a.querySelector('.field-Naam') && a.querySelector('.field-Naam').textContent.trim()) || '';
            var naamB = (b.querySelector('.field-Naam') && b.querySelector('.field-Naam').textContent.trim()) || '';
            return naamA.localeCompare(naamB, 'nl', { sensitivity: 'base' });
          });
        } else if (sortType === 'status') {
          var statusOrder = { 'In behandeling': 1, 'Bevestigd': 2, 'Geannuleerd': 3 };
          var getStatus = function(block) { return (block.querySelector('.field-Status') && block.querySelector('.field-Status').textContent.trim()) || ''; };
          blocks.sort(function(a, b) { return (statusOrder[getStatus(a)] || 99) - (statusOrder[getStatus(b)] || 99); });
        } else {
          blocks = Array.prototype.slice.call(originalOrder);
        }
        blocks.forEach(function(b) { container.appendChild(b); });
        sortMenu.classList.add('hidden');
        if (sortToggle) sortToggle.textContent = sortType === 'default' ? 'Sorteer ▼' : (sortType === 'name' ? 'Sorteer: Naam' : 'Sorteer: Status');
      });
    });
  }

  // Modal open/close
  var openBtn = document.getElementById('open-form-btn');
  var closeBtn = document.getElementById('close-modal');
  if (openBtn) openBtn.addEventListener('click', function() { if (modal) modal.classList.remove('hidden'); });
  if (closeBtn) closeBtn.addEventListener('click', function() { if (modal) modal.classList.add('hidden'); });

  // Submit
  if (form) form.addEventListener('submit', async function(e) {
    e.preventDefault();
    var data = Object.fromEntries(new FormData(form));
    data.status = data.status || 'In behandeling';
    var editing = form.dataset.editing;
    var method = editing ? 'PUT' : 'POST';
    var url = editing ? '/api/reservations/' + editing : '/api/reservations';
    try {
      var r = await fetch(url, { method: method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
      var saved = await r.json();
      if (editing) {
        var old = container.querySelector('[data-original="' + editing + '"]');
        if (old) old.replaceWith(createReservationElement(saved, 0));
        form.dataset.editing = '';
      } else {
        var el = createReservationElement(saved, container.children.length);
        container.appendChild(el);
        originalOrder.push(el);
      }
      if (modal) modal.classList.add('hidden');
      form.reset();
    } catch (err) {
      console.error('save failed', err);
    }
  });
}

if (typeof window !== 'undefined') {
  setupReservationsPage().catch(function(err) { console.error('Failed to initialize reservations page', err); });
}