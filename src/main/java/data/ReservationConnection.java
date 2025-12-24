package data;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Properties;

public class ReservationConnection {

    private static Connection connection;

    public static Connection getConnection() throws SQLException {
        if (connection == null || connection.isClosed()) {
            try {
                Class.forName("org.postgresql.Driver");
            } catch (ClassNotFoundException e) {
                throw new RuntimeException("PostgreSQL Driver niet gevonden", e);
            }

            String host = System.getenv("DATABASE_HOST");
            String port = System.getenv("DATABASE_PORT");
            String dbName = System.getenv("DATABASE_NAME");
            String user = System.getenv("DATABASE_USER");
            String pass = System.getenv("DATABASE_PASSWORD");

            if (host == null || port == null || dbName == null || user == null || pass == null) {
                throw new RuntimeException(
                        "Database connectie info ontbreekt. Controleer DATABASE_HOST, DATABASE_PORT, DATABASE_NAME, DATABASE_USER en DATABASE_PASSWORD."
                );
            }

            pass = pass.trim().replace("\n", "").replace("\r", "");

            String jdbcUrl = String.format("jdbc:postgresql://%s:%s/%s", host, port, dbName);

            Properties props = new Properties();
            props.setProperty("user", user);
            props.setProperty("password", pass);

            System.out.println("Connecting to DB: " + jdbcUrl);
            connection = DriverManager.getConnection(jdbcUrl, props);
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
