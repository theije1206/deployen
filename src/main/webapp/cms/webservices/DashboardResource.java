package team.verzinwat.cms.webservices;


import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import team.verzinwat.cms.domains.DashboardData;
import team.verzinwat.cms.services.DashboardService;

import java.util.Map;

@Path("/dashboard")
@Produces(MediaType.APPLICATION_JSON)
public class DashboardResource {

    private final DashboardService service = new DashboardService();

    @GET
    public Response getDashboardData(@QueryParam("date") String date) {
        if (date == null || date.isBlank()) {
            date = java.time.LocalDate.now().toString();
        }

        DashboardData data = service.getDashboardData(date);
        System.out.println(data);
        return Response.ok(Map.of("msg", "success")).build(); //TODO if return data, then 500

    }
}