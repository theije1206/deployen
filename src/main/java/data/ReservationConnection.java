package data;

import java.io.InputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Properties;

public class ReservationConnection {

    private static Connection connection;

    public static Connection getConnection() throws SQLException, ClassNotFoundException {
        if (connection == null || connection.isClosed()) {
            Class.forName("org.postgresql.Driver");

            String url = System.getenv("DB_URL");
            String user = System.getenv("DB_USER");
            String pass = System.getenv("DB_PASS");

            if (url == null || user == null || pass == null) {
                // Fallback: lees properties uit application.properties
                try (InputStream in = ReservationConnection.class.getClassLoader()
                        .getResourceAsStream("application.properties")) {
                    if (in == null) {
                        throw new RuntimeException("Geen database configuratie gevonden (env of properties)");
                    }
                    Properties props = new Properties();
                    props.load(in);

                    url = props.getProperty("db.url");
                    user = props.getProperty("db.user");
                    pass = props.getProperty("db.pass");
                } catch (Exception e) {
                    throw new RuntimeException("Kon database configuratie niet laden", e);
                }
            }

            System.out.println("Connecting to DB: " + url + " as " + user);
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
