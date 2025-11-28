package team.verzinwat.cms.data;

import team.verzinwat.cms.domain.Reservation;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import java.time.LocalDate;

public class ReservationDaoPostgres implements ReservationDAO {

    private final Connection connection;

    public ReservationDaoPostgres(Connection inConnection) throws SQLException {
        this.connection = inConnection;
    }

    @Override
    public boolean save(Reservation r) throws SQLException {
        String sql = "INSERT INTO reservation (naam, aankomst, vertrek, plaats, status, contact) VALUES (?, ?, ?, ?, ?, ?)";
        try (PreparedStatement stmt = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS)) {
            stmt.setString(1, r.getNaam());
            stmt.setDate(2, Date.valueOf(r.getAankomst()));
            stmt.setDate(3, Date.valueOf(r.getVertrek()));
            stmt.setString(4, r.getPlaats());
            stmt.setString(5, r.getStatus());
            stmt.setString(6, r.getContact());

            int affected = stmt.executeUpdate();
            if (affected == 0) return false;

            try (ResultSet keys = stmt.getGeneratedKeys()) {
                if (keys.next()) r.setId(keys.getInt(1));
            }
            return true;
        }
    }

    @Override
    public boolean update(Reservation r) throws SQLException {
        String sql = "UPDATE reservation SET naam = ?, aankomst = ?, vertrek = ?, plaats = ?, status = ?, contact = ? WHERE id = ?";
        try (PreparedStatement stmt = connection.prepareStatement(sql)) {
            stmt.setString(1, r.getNaam());
            stmt.setDate(2, Date.valueOf(r.getAankomst()));
            stmt.setDate(3, Date.valueOf(r.getVertrek()));
            stmt.setString(4, r.getPlaats());
            stmt.setString(5, r.getStatus());
            stmt.setString(6, r.getContact());
            stmt.setInt(7, r.getId());

            return stmt.executeUpdate() > 0;
        }
    }

    @Override
    public boolean deleteById(int id) throws SQLException {
        String sql = "DELETE FROM reservation WHERE id = ?";
        try (PreparedStatement stmt = connection.prepareStatement(sql)) {
            stmt.setInt(1, id);
            return stmt.executeUpdate() > 0;
        }
    }

    @Override
    public List<Reservation> findAll() throws SQLException {
        String sql = "SELECT * FROM reservation";
        List<Reservation> reservations = new ArrayList<>();
        try (PreparedStatement stmt = connection.prepareStatement(sql)) {
            ResultSet rs = stmt.executeQuery();
            while (rs.next()) {
                reservations.add(new Reservation(
                        rs.getInt("id"),
                        rs.getString("naam"),
                        rs.getDate("aankomst").toLocalDate(),
                        rs.getDate("vertrek").toLocalDate(),
                        rs.getString("plaats"),
                        rs.getString("status"),
                        rs.getString("contact")
                ));
            }
        }
        return reservations;
    }
}
