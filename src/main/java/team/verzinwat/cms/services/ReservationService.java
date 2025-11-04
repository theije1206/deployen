package team.verzinwat.cms.services;

import team.verzinwat.cms.domain.Reservation;
import java.util.ArrayList;
import java.util.List;

public class ReservationService {

    private final List<Reservation> reservations = new ArrayList<>();

    public ReservationService() {
        reservations.add(new Reservation("Jan Janssen","14-09-2025","16-09-2025","Accommodatie - B - 3","Bevestigd","0612345678"));
        reservations.add(new Reservation("Piet Pietersen","20-09-2025","23-09-2025","Accommodatie - A - 1","In behandeling","0687654321"));
        reservations.add(new Reservation("Kees van der Spek","10-10-2025","12-10-2025","Accommodatie - C - 2","Geannuleerd","0644455566"));
    }

    public List<Reservation> getAllReservations() {
        return reservations;
    }

    public void addReservation(Reservation reservation) {
        reservations.add(reservation);
    }
}
