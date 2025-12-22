package team.verzinwat.cms.webservices;


import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import team.verzinwat.cms.domains.Page;
import team.verzinwat.cms.services.ElementService;
import team.verzinwat.cms.services.PageService;

import java.util.List;
import java.util.UUID;

@Path("/pages")
public class PagesResource {
    @GET
    @Produces("application/json")
    public List<Page> getPages() {
        ElementService elementService = new ElementService();
        PageService pageService = new PageService();

        for (var page : pageService.getPages()) {
            page.setContent(elementService.getElements());
        }

        return pageService.getPages();
    }

    @POST
    public boolean deletePage(UUID uuid) {
        return true;
    }
}
