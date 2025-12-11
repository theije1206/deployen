package team.verzinwat.cms.webservices;


import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import team.verzinwat.cms.domains.Order;
import team.verzinwat.cms.services.OrderService;

import java.util.ArrayList;

@Path("/orders")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class OrderResource {

    private OrderService service = new OrderService();

    @GET
    public Response getOrders() {
        ArrayList<Order> orders = service.getAllOrders();

        if (orders.isEmpty()) {
            return Response.status(Response.Status.NOT_FOUND).entity("No orders found.").build();
        }

        return Response.ok(orders).build();
    }

    @POST
    public Response addOrder(Order order) {
        service.addOrder(order);
        return Response.status(Response.Status.CREATED).entity(order).build();
    }
}
//bobby