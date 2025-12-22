package team.verzinwat.cms.DAO;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DatabaseConnection {

    private static Connection connection;

    public static Connection getConnection() throws SQLException, ClassNotFoundException {
        if (connection == null) {

            Class.forName("org.postgresql.Driver");

            var username = "postgres";
            var password = "Spreken21!";

            String url = "jdbc:postgresql://localhost:5433/Bread";

            connection = DriverManager.getConnection(url, username, password);
        }

        return connection;
    }
    public static void closeConnection() throws SQLException {
        if (connection != null) {
            connection.close();
            connection = null;
        }
    }
}
