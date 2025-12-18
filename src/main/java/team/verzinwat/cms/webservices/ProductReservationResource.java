package team.verzinwat.cms.webservices;

import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import jakarta.validation.Validation;
import jakarta.validation.Validator;
import jakarta.validation.ValidatorFactory;
import java.util.Set;
import jakarta.validation.ConstraintViolation;
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
        ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
        Validator validator = factory.getValidator();
        Set<ConstraintViolation<ProductReservation>> violations = validator.validate(reservation);

        if (!violations.isEmpty()) {
            String message = violations.iterator().next().getMessage();
            return Response.status(Response.Status.BAD_REQUEST)
                    .entity("{\"error\": \"" + message + "\"}")
                    .build();
        }

        ProductReservation saved = service.addReservation(reservation);
        return Response.ok(saved).build();
    }

    @GET
    public List<ProductReservation> getAllReservations() {
        return service.getAllReservations();
    }
}
