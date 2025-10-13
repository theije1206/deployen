package team.verzinwat.cms.webservices;

import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import team.verzinwat.cms.domain.Reservation;
import team.verzinwat.cms.services.ReservationService;

import java.util.List;

@Path("/reservations")
@Produces(MediaType.APPLICATION_JSON)
public class ReservationResource {

    private final ReservationService reservationService = new ReservationService();

    @GET
    public Response getAllReservations() {
        List<Reservation> reservations = reservationService.getAllReservations();
        return Response.ok(reservations).build();
    }
}
