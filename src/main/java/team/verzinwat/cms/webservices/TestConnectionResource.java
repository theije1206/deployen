package team.verzinwat.cms.webservices;

import team.verzinwat.cms.data.ReservationConnection;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import java.sql.PreparedStatement;

@Path("/testdb")
public class TestConnectionResource {

    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String testConnection() {
        try {
            var connection = ReservationConnection.getConnection();

            PreparedStatement pst = connection.prepareStatement("SELECT *");
            pst.executeQuery();

            return "DB OK";
        } catch (Exception e) {
            return "DB ERROR: " + e.getMessage();
        }
    }
}
