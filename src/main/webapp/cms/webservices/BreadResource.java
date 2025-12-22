package team.verzinwat.cms.webservices;

import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import team.verzinwat.cms.DAO.BreadDAO;
import team.verzinwat.cms.DAO.BreadDAOPostgres;
import team.verzinwat.cms.DAO.DatabaseConnection;
import team.verzinwat.cms.domains.Bread;
import team.verzinwat.cms.services.BreadService;

import java.sql.Connection;

@Path("/bread")
public class BreadResource {

    private BreadService service;

    public BreadResource() {
        try {
            Connection conn = DatabaseConnection.getConnection();
            BreadDAO breadDAO = new BreadDAOPostgres(conn);
            this.service = new BreadService(breadDAO);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // ---------- GET ----------
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAll() {
        try {
            return Response.ok(service.getAllBreads()).build();
        } catch (Exception e) {
            return Response.serverError().entity("Failed to fetch breads").build();
        }
    }

    // ---------- POST ----------
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response addBread(Bread bread) {
        try {
            boolean ok = service.addBread(bread);
            if (!ok) {
                return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
                        .entity("Could not store bread").build();
            }
            return Response.status(Response.Status.CREATED).entity(bread).build();
        } catch (Exception e) {
            return Response.serverError().entity("Failed to add bread").build();
        }
    }

    // ---------- PUT ----------
    @PUT
    @Path("/{name}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response updateBread(@PathParam("name") String name, Bread updatedBread) {
        try {
            updatedBread.setOriginalName(name);
            boolean success = service.updateBread(updatedBread);
            if (success) return Response.ok(updatedBread).build();
            return Response.status(Response.Status.NOT_FOUND)
                    .entity("Bread not found").build();
        } catch (Exception e) {
            return Response.serverError().entity("Failed to update bread").build();
        }
    }

    // ---------- DELETE ----------
    @DELETE
    @Path("/{name}")
    public Response deleteBread(@PathParam("name") String name) {
        try {
            Bread toDelete = new Bread(name, 0);
            boolean success = service.deleteBread(toDelete);
            if (success) return Response.noContent().build();
            return Response.status(Response.Status.NOT_FOUND)
                    .entity("Bread not found").build();
        } catch (Exception e) {
            return Response.serverError().entity("Failed to delete bread").build();
        }
    }
}
