package team.verzinwat.cms.DAO;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class DatabaseAdminDAOPostgres implements DatabaseAdminDAO {


    // Container for the connection
    private Connection connection = null;

    // Constructor that takes a connection
    // It does NOT create its own connection
    public DatabaseAdminDAOPostgres(Connection inConnection)
            throws SQLException {
        this.connection = inConnection;
    }

    @Override
    public boolean initialize() throws SQLException {
        this.resetTables();
        this.createTables();
        this.createAdminUser();
        return true;
    }

    private boolean createTables() throws SQLException {
        String tableQuery = "CREATE TABLE public.user(" +
                "user_id SERIAL PRIMARY KEY," +
                "username TEXT UNIQUE," +
                "password TEXT," +
                "ROLE TEXT)";
        PreparedStatement preparedStatement = connection.prepareStatement(tableQuery);
        preparedStatement.execute();
        return true;
    }

    private boolean resetTables() throws SQLException {
        String tableQuery = "DROP TABLE IF EXISTS public.user";
        PreparedStatement preparedStatement = connection.prepareStatement(tableQuery);
        preparedStatement.execute();
        return true;
    }

    private boolean createAdminUser() throws SQLException {
        String query = "INSERT INTO public.user(username, password, role) VALUES (?, ?, ?)";
        PreparedStatement preparedStatement = connection.prepareStatement(query);
        preparedStatement.setString(1, "admin");
        preparedStatement.setString(2, "nimda");
        preparedStatement.setString(3, "superadmin");
        preparedStatement.executeUpdate();
        return true;
    }
}