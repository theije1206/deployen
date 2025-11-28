package team.verzinwat.cms.webservices;

import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import team.verzinwat.cms.domain.Reservation;
import team.verzinwat.cms.services.ReservationService;
import team.verzinwat.cms.data.ReservationConnection;
import team.verzinwat.cms.data.ReservationDAO;
import team.verzinwat.cms.data.ReservationDaoPostgres;

import jakarta.ws.rs.core.Context;
import jakarta.ws.rs.core.SecurityContext;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.List;


@Path("/reservations")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class ReservationResource {

    private static ReservationService service;

    static {
        try {
            Connection conn = ReservationConnection.getConnection();
            ReservationDAO dao = new ReservationDaoPostgres(conn);
            service = new ReservationService(dao);
        } catch (SQLException | ClassNotFoundException e) {
            e.printStackTrace();
            throw new RuntimeException("Cannot connect to database", e);
        }
    }


    @GET
    public List<Reservation> getAll(@Context SecurityContext sc) {
        checkAccess(sc);
        return service.getAllReservations();
    }

    @POST
    public Reservation addReservation(Reservation reservation, @Context SecurityContext sc) {
        checkAccess(sc);
        return service.addReservation(
                reservation.getNaam(),
                reservation.getAankomst(),
                reservation.getVertrek(),
                reservation.getPlaats(),
                reservation.getStatus(),
                reservation.getContact()
        );
    }

    @PUT
    @Path("/{id}")
    public Reservation updateReservation(@PathParam("id") int id, Reservation updated, @Context SecurityContext sc) {
        checkAccess(sc);
        return service.updateReservation(
                id,
                updated.getNaam(),
                updated.getAankomst(),
                updated.getVertrek(),
                updated.getPlaats(),
                updated.getStatus(),
                updated.getContact()
        );
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
