package data;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ReservationConnection {

    private static Connection connection;

    public static Connection getConnection() throws SQLException {
        if (connection == null || connection.isClosed()) {
            try {
                Class.forName("org.postgresql.Driver");
            } catch (ClassNotFoundException e) {
                throw new RuntimeException("PostgreSQL Driver niet gevonden", e);
            }

            String url = System.getenv("DB_URL");
            String user = System.getenv("DB_USER");
            String pass = System.getenv("DB_PASS");

            if (url == null || user == null || pass == null) {
                throw new RuntimeException("Database connectie info ontbreekt. Controleer DB_URL, DB_USER en DB_PASS.");
            }

            System.out.println("Connecting to DB: " + url);
            connection = DriverManager.getConnection(url, user, pass);
        }

        return connection;
    }

    public static void closeConnection() throws SQLException {
        if (connection != null && !connection.isClosed()) {
            connection.close();
            connection = null;
        }
    }
}
