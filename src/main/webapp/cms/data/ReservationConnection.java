package data;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ReservationConnection {

    private static Connection connection;

    /**
     * Returns a database connection. If no connection exists, creates a new connection and returns it.
     */
    public static Connection getConnection() throws SQLException, ClassNotFoundException {
        if (connection == null || connection.isClosed()) {
            Class.forName("org.postgresql.Driver");

            String url = System.getenv("DB_URL");
            String user = System.getenv("DB_USER");
            String pass = System.getenv("DB_PASS");

            System.out.println("DB_URL = " + url);
            System.out.println("DB_USER = " + user);
            System.out.println("DB_PASS = " + pass);

            connection = DriverManager.getConnection(url, user, pass);
        }
        return connection;
    }

    /**
     * If a connection is still open, closes that connection
     */
    public static void closeConnection() throws SQLException {
        if (connection != null && !connection.isClosed()) {
            connection.close();
            connection = null;
        }
    }
}
