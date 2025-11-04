package team.verzinwat.cms.webservices;

import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import team.verzinwat.cms.domain.Reservation;
import team.verzinwat.cms.services.ReservationService;

import java.util.List;

@Path("/reservations")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class ReservationResource {

    private static final ReservationService service = new ReservationService();

    @GET
    public List<Reservation> getAll() {
        return service.getAllReservations();
    }

    @POST
    public Reservation addReservation(Reservation reservation) {
        service.addReservation(reservation);
        return reservation;
    }
}
