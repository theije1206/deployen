package webservices;

import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;

import domain.Reservation;
import services.ReservationService;
import data.ReservationDAO;
import data.ReservationDaoPostgres;
import data.ReservationConnection;

import java.sql.Connection;
import java.util.List;

@Path("/reservations")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)

public class ReservationResource {

    private ReservationService service;

    public ReservationResource() {
        try {
            Connection conn = ReservationConnection.getConnection();
            ReservationDAO dao = new ReservationDaoPostgres(conn);
            this.service = new ReservationService(dao);
        } catch (Exception e) {
            throw new RuntimeException("Database connectie mislukt", e);
        }
    }

    @GET
    public List<Reservation> getAll() {
        return service.getAllReservations();
    }

    @POST
    public Reservation addReservation(Reservation reservation) {
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
    public Reservation updateReservation(@PathParam("id") int id,
                                         Reservation updated) {
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
    public void deleteReservation(@PathParam("id") int id) {
        boolean removed = service.deleteReservation(id);
        if (!removed) {
            throw new WebApplicationException("Reservering niet gevonden", 404);
        }
    }
}
