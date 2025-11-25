package team.verzinwat.cms.services;

import team.verzinwat.cms.domain.Reservation;

import java.util.ArrayList;
import java.util.List;

public class ReservationService {

    private final List<Reservation> reservations = new ArrayList<>();
    private int nextId = 1;

    /** Dummy data */
    public ReservationService() {
        addReservation("Jan Janssen","14-09-2025","16-09-2025","Accommodatie - B - 3","Bevestigd","0612345678");
        addReservation("Piet Pietersen","20-09-2025","23-09-2025","Accommodatie - A - 1","In behandeling","0687654321");
        addReservation("Kees van der Spek","10-10-2025","12-10-2025","Accommodatie - C - 2","Geannuleerd","0644455566");
    }

    /** Geeft een onveranderlijke lijst terug van alle reserverigen */
    public List<Reservation> getAllReservations() {
        return reservations;
    }

    /** Voegt een nieuwe reservation toe */
    public Reservation addReservation(String naam, String aankomst, String vertrek, String plaats, String status, String contact) {
        Reservation reservation = new Reservation(nextId++, naam, aankomst, vertrek, plaats, status, contact);
        reservations.add(reservation);
        return reservation;
    }

    /** Update een bestaande reservering door een nieuw object aan te maken en het oude te vervangen */
    public Reservation updateReservation(int id, String naam, String aankomst, String vertrek, String plaats, String status, String contact) {
        Reservation existing = getReservationById(id);
        if (existing == null) return null;

        /** Maak nieuw object met bestaande of nieuwe waarden */
        Reservation updated = new Reservation(
                existing.getId(),
                naam != null ? naam : existing.getNaam(),
                aankomst != null ? aankomst : existing.getAankomst(),
                vertrek != null ? vertrek : existing.getVertrek(),
                plaats != null ? plaats : existing.getPlaats(),
                status != null ? status : existing.getStatus(),
                contact != null ? contact : existing.getContact()
        );

        /** Vervang het oude object */
        reservations.remove(existing);
        reservations.add(updated);
        return updated;
    }

    /** Verwijdert een reservation op basis van ID */
    public boolean deleteReservation(int id) {
        return reservations.removeIf(r -> r.getId() == id);
    }

    /** Haalt een reservation op basis van ID */
    public Reservation getReservationById(int id) {
        return reservations.stream()
                .filter(r -> r.getId() == id)
                .findFirst()
                .orElse(null);
    }
}
