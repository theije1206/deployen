package team.verzinwat.cms.services;

import java.util.List;
import java.util.ArrayList;
import team.verzinwat.cms.domain.Reservation;

public class ReservationService {
    private static final List<Reservation> reservations = new ArrayList<>();

    static {
        reservations.add(new Reservation(1, "Jan Jansen", "Bevestigd"));
        reservations.add(new Reservation(2, "Kim de Vries", "In behandeling"));
        reservations.add(new Reservation(3, "Piet Pietersen", "Geannuleerd"));
    }

    public List<Reservation> getAll() {
        return reservations;
    }
}
