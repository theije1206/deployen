package team.verzinwat.cms.webservices;

import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import team.verzinwat.cms.domain.ProductReservation;
import team.verzinwat.cms.services.ProductReservationService;

import java.util.List;

@Path("/product-reservations")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class ProductReservationResource {

    private static final ProductReservationService service = new ProductReservationService();

    @POST
    public Response createReservation(ProductReservation reservation) {
        if (reservation == null) {
            return Response.status(Response.Status.BAD_REQUEST).build();
        }
        ProductReservation saved = service.addReservation(reservation);
        return Response.ok(saved).build();
    }

    @GET
    public List<ProductReservation> getAllReservations() {
        return service.getAllReservations();
    }
}
