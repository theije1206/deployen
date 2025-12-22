package team.verzinwat.cms.webservices;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import team.verzinwat.cms.domains.Data;
import team.verzinwat.cms.domains.Report;

import java.util.List;

@Path("/report")
public class SanitairService {

    @GET
    @Produces("application/json")
    public List<Report> orders() {
        return Data.getCompany().getAllOrders();
    }
}
