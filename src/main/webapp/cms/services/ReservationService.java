package services;

import domain.Reservation;
import data.ReservationDAO;

import java.sql.SQLException;
import java.time.LocalDate;
import java.util.List;

public class ReservationService {

    private final ReservationDAO dao;

    public ReservationService(ReservationDAO dao) {
        this.dao = dao;
    }

    public Reservation addReservation(String naam, LocalDate aankomst, LocalDate vertrek, String plaats, String status, String contact) {

        Reservation r = new Reservation(naam, aankomst, vertrek, plaats, status, contact);
        try {
            boolean saved = dao.save(r);
            if (!saved) throw new RuntimeException("Reservation could not be saved");
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
        return r;
    }

    public Reservation updateReservation(int id, String naam, LocalDate aankomst, LocalDate vertrek, String plaats, String status, String contact) {

        Reservation r = new Reservation(id, naam, aankomst, vertrek, plaats, status, contact);
        try {
            boolean updated = dao.update(r);
            if (!updated) throw new RuntimeException("Reservation not found");
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
        return r;
    }

    public boolean deleteReservation(int id) {
        try {
            return dao.deleteById(id);
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    public List<Reservation> getAllReservations() {
        try {
            return dao.findAll();
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }
}
