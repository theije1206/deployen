package webservices;

import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import services.RentingService;
import domain.Product;

import java.util.List;

@Path("/products")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class RentingResource {

    private static final RentingService service = new RentingService();

    @GET
    public List<Product> getAll() {
        return service.getAllProducts();
    }
}
