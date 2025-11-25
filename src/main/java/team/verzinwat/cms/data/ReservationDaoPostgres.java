package team.verzinwat.cms.data;

import team.verzinwat.cms.domain.Reservation;


import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class ReservationDaoPostgres implements ReservationDAO {

    // Container for the connection
    private Connection connection = null;

    // Constructor that takes a connection
    // It does NOT create its own connection
    public ReservationDaoPostgres(Connection inConnection)
            throws SQLException {

        this.connection = inConnection;
    }

    @Override
    public boolean save(Reservation inReservation) throws SQLException {
        //TODO make save happen
        return false;
    }

    @Override
    public boolean update(Reservation inReservation) throws SQLException {
        //TODO make update happen
        return false;
    }

    @Override
    public boolean delete(Reservation inReservation) throws SQLException {
        //TODO make delete happen
        return false;
    }

    @Override
    public List<Reservation> findAll() throws SQLException {
        String q = "SELECT * FROM reservation";
        List<Reservation> reservations = new ArrayList<>();
        try (PreparedStatement pst = connection.prepareStatement(q)) {
            ResultSet rs = pst.executeQuery();
            while (rs.next()) {
                Reservation reservation = new Reservation(
                        rs.getInt("id"),
                        rs.getString("naam"),
                        rs.getString("aankomst"),
                        rs.getString("vertrek"),
                        rs.getString("plaats"),
                        rs.getString("status"),
                        rs.getString("contact")
                );
                reservations.add(reservation);
            }
        }
        return reservations;
    }
}
