package team.verzinwat.cms.services;

import team.verzinwat.cms.data.ReservationDAO;
import team.verzinwat.cms.data.ReservationDaoPostgres;
import team.verzinwat.cms.domain.Reservation;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.List;

public class ReservationService {

    private final ReservationDAO dao;

    public ReservationService(Connection connection) throws SQLException {
        this.dao = new ReservationDaoPostgres(connection);
    }

    /** Haal alle reserveringen uit de database */
    public List<Reservation> getAllReservations() {
        try {
            return dao.findAll();
        } catch (SQLException e) {
            throw new RuntimeException("Error fetching reservations from DB", e);
        }
    }

    /** Voeg een reservering toe in de database */
    public Reservation addReservation(
            String naam,
            String aankomst,
            String vertrek,
            String plaats,
            String status,
            String contact) {

        try {
            Reservation r = new Reservation(
                    0, naam, aankomst, vertrek, plaats, status, contact
            );

            boolean ok = dao.save(r);
            if (!ok) throw new RuntimeException("Failed to save reservation");

            return r;
        } catch (SQLException e) {
            throw new RuntimeException("Database error while saving reservation", e);
        }
    }

    /** Update een reservering in de database */
    public Reservation updateReservation(
            int id,
            String naam,
            String aankomst,
            String vertrek,
            String plaats,
            String status,
            String contact) {

        try {
            Reservation r = new Reservation(
                    id, naam, aankomst, vertrek, plaats, status, contact
            );

            boolean ok = dao.update(r);
            if (!ok) throw new RuntimeException("Failed to update reservation");

            return r;
        } catch (SQLException e) {
            throw new RuntimeException("Database error while updating reservation", e);
        }
    }

    /** Verwijder een reservering in de database */
    public boolean deleteReservation(int id) {
        try {
            Reservation dummy = new Reservation(id, null, null, null, null, null, null);
            return dao.delete(dummy);
        } catch (SQLException e) {
            throw new RuntimeException("Database error while deleting reservation", e);
        }
    }
}
