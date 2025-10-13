package team.verzinwat.cms.webservices;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import team.verzinwat.cms.domain.Reservation;

import java.io.InputStream;
import java.util.Collections;
import java.util.List;

@Path("/reservations")
@Produces(MediaType.APPLICATION_JSON)
public class ReservationResource {

    private static final ObjectMapper mapper = new ObjectMapper();

    @GET
    public List<Reservation> getAllReservations() {
        try (InputStream is = getClass().getClassLoader().getResourceAsStream("reservations-data.json")) {
            if (is == null) {
                System.err.println("JSON-bestand niet gevonden!");
                return Collections.emptyList();
            }
            return mapper.readValue(is, new TypeReference<List<Reservation>>() {});
        } catch (Exception e) {
            e.printStackTrace();
            return Collections.emptyList();
        }
    }
}

