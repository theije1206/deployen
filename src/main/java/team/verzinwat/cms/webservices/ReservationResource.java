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

    @PUT
    @Path("/{id}")
    public Reservation updateReservation(@PathParam("id") int id, Reservation updated) {
        return service.updateReservation(id, updated);
    }

    @DELETE
    @Path("/{id}")
    public void deleteReservation(@PathParam("id") int id) {
        boolean removed = service.deleteReservation(id);
        if (!removed) {
            throw new WebApplicationException("Reservering niet gevonden", 404);
        }
    }
}
