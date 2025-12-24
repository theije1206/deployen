package data;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.net.URI;
import java.net.URISyntaxException;

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
            String databaseUrl = System.getenv("DATABASE_URL"); // Railway-style URL

            if (databaseUrl != null) {
                // Parse DATABASE_URL van Railway
                try {
                    URI dbUri = new URI(databaseUrl);
                    user = dbUri.getUserInfo().split(":")[0];
                    pass = dbUri.getUserInfo().split(":")[1];
                    String host = dbUri.getHost();
                    int port = dbUri.getPort();
                    String dbName = dbUri.getPath().substring(1);

                    url = "jdbc:postgresql://" + host + ":" + port + "/" + dbName;
                } catch (URISyntaxException e) {
                    throw new RuntimeException("Ongeldige DATABASE_URL: " + databaseUrl, e);
                }
            }

            if (url == null || user == null || pass == null) {
                throw new RuntimeException("Geen database configuratie gevonden (env of properties)");
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
