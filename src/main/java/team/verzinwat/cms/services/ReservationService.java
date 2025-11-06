package team.verzinwat.cms.services;

import team.verzinwat.cms.domain.Reservation;
import java.util.ArrayList;
import java.util.List;

public class ReservationService {

    private final List<Reservation> reservations = new ArrayList<>();
    private int nextId = 1;

    public ReservationService() {
        addReservation(new Reservation("Jan Janssen","14-09-2025","16-09-2025","Accommodatie - B - 3","Bevestigd","0612345678"));
        addReservation(new Reservation("Piet Pietersen","20-09-2025","23-09-2025","Accommodatie - A - 1","In behandeling","0687654321"));
        addReservation(new Reservation("Kees van der Spek","10-10-2025","12-10-2025","Accommodatie - C - 2","Geannuleerd","0644455566"));
    }

    public List<Reservation> getAllReservations() {
        return reservations;
    }

    public Reservation addReservation(Reservation reservation) {
        if (reservation.getId() == 0) {
            reservation.setId(nextId++);
        }
        reservations.add(reservation);
        return reservation;
    }

    public Reservation updateReservation(int id, Reservation updated) {
        Reservation existing = reservations.stream()
                .filter(r -> r.getId() == id)
                .findFirst()
                .orElse(null);

        if (existing == null) return null;

        if (updated.getNaam() != null) existing.setNaam(updated.getNaam());
        if (updated.getAankomst() != null) existing.setAankomst(updated.getAankomst());
        if (updated.getVertrek() != null) existing.setVertrek(updated.getVertrek());
        if (updated.getPlaats() != null) existing.setPlaats(updated.getPlaats());
        if (updated.getContact() != null) existing.setContact(updated.getContact());
        if (updated.getStatus() != null) existing.setStatus(updated.getStatus());

        return existing;
    }

    public boolean deleteReservation(int id) {
        return reservations.removeIf(r -> r.getId() == id);
    }

    public Reservation getReservationById(int id) {
        return reservations.stream()
                .filter(r -> r.getId() == id)
                .findFirst()
                .orElse(null);
    }
}
