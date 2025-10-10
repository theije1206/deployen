package team.verzinwat.cms.webservices;

import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import java.util.List;
import team.verzinwat.cms.domain.Reservation;

@Path("/reservations")
public class ReservationResource {

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Reservation> getAllReservations() {
        return List.of(
                new Reservation(1, "Jan", "Bevestigd"),
                new Reservation(2, "Piet", "In behandeling")
        );
    }
}
