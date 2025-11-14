package team.verzinwat.cms.webservices;

import jakarta.annotation.security.RolesAllowed;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import team.verzinwat.cms.domain.Reservation;
import team.verzinwat.cms.services.ReservationService;
import jakarta.ws.rs.core.Context;
import jakarta.ws.rs.core.SecurityContext;

import java.util.List;

@Path("/reservations")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class ReservationResource {

    private static final ReservationService service = new ReservationService();

    @GET
    public List<Reservation> getAll(@Context SecurityContext sc) {
        checkAccess(sc);
        return service.getAllReservations();
    }

    @POST
    public Reservation addReservation(Reservation reservation, @Context SecurityContext sc) {
        checkAccess(sc);
        return service.addReservation(reservation);
    }

    @PUT
    @Path("/{id}")
    public Reservation updateReservation(@PathParam("id") int id, Reservation updated, @Context SecurityContext sc) {
        checkAccess(sc);
        return service.updateReservation(id, updated);
    }

    @DELETE
    @Path("/{id}")
    public void deleteReservation(@PathParam("id") int id, @Context SecurityContext sc) {
        checkAccess(sc);
        boolean removed = service.deleteReservation(id);
        if (!removed) {
            throw new WebApplicationException("Reservering niet gevonden", 404);
        }
    }

    private void checkAccess(SecurityContext sc) {
        if (sc.getUserPrincipal() == null) {
            throw new WebApplicationException("Niet ingelogd", 401);
        }
        if (!sc.isUserInRole("campingowner")) {
            throw new WebApplicationException("Geen toegang", 403);
        }
    }
}
