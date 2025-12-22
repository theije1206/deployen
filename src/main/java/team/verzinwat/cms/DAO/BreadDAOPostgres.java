package team.verzinwat.cms.DAO;

import team.verzinwat.cms.domains.Bread;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class BreadDAOPostgres implements BreadDAO {

    private Connection connection;

    public BreadDAOPostgres(Connection inConnection) {
        this.connection = inConnection;
    }

    @Override
    public boolean save(Bread b) throws SQLException {
        String q = "INSERT INTO bread(name, price) VALUES (?, ?)";
        try (PreparedStatement pst = connection.prepareStatement(q)) {
            pst.setString(1, b.getName());
            pst.setDouble(2, b.getPrice());
            return pst.executeUpdate() > 0;
        }
    }

    @Override
    public boolean update(Bread b) throws SQLException {
        String q = "UPDATE bread SET name=?, price=? WHERE name=?";
        try (PreparedStatement pst = connection.prepareStatement(q)) {
            pst.setString(1, b.getName());
            pst.setDouble(2, b.getPrice());
            pst.setString(3, b.getOriginalName());   // nieuwe name
            return pst.executeUpdate() > 0;
        }
    }


    @Override
    public boolean delete(Bread b) throws SQLException {
        String q = "DELETE FROM bread WHERE name=?";
        try (PreparedStatement pst = connection.prepareStatement(q)) {
            pst.setString(1, b.getName());
            return pst.executeUpdate() > 0;
        }
    }

    @Override
    public List<Bread> findAll() throws SQLException {
        String q = "SELECT name, price FROM bread";
        List<Bread> breads = new ArrayList<>();

        try (PreparedStatement pst = connection.prepareStatement(q)) {
            ResultSet rs = pst.executeQuery();
            while (rs.next()) {
                Bread b = new Bread(
                        rs.getString("name"),
                        rs.getDouble("price")
                );
                breads.add(b);
            }
        }
        return breads;
    }
}
