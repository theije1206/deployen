package team.verzinwat.cms.DAO;


import team.verzinwat.cms.domains.User;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class UserDaoPostgres implements UserDAO{

    // Container for the connection
    private Connection connection = null;

    // Constructor that takes a connection
    // It does NOT create its own connection
    public UserDaoPostgres(Connection inConnection)
            throws SQLException {
        this.connection = inConnection;
    }

    @Override
    public boolean save(User inUser) throws SQLException {
        return false;
    }

    @Override
    public boolean update(User inUser) throws SQLException {
        return false;
    }

    @Override
    public boolean delete(User inUser) throws SQLException {
        return false;
    }

    @Override
    public List<User> findAll() throws SQLException {
        String q = "SELECT * FROM public.user";
        List<User> list = new ArrayList<>();
        try (PreparedStatement pst = connection.prepareStatement(q)) {
            ResultSet rs = pst.executeQuery();
            while (rs.next()) {
                var username = rs.getString("username");
                var password = rs.getString("password");
                var role = rs.getString("role");
                list.add(new User(username, password, role));
            }
        }
        return list;
    }

    @Override
    public User findUserByUsername() throws SQLException {
        return null;
    }
}