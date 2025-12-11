package team.verzinwat.cms.webservices;

import jakarta.ws.rs.ApplicationPath;
import org.glassfish.jersey.server.ResourceConfig;

@ApplicationPath("/api")
public class ApplicationConfig extends ResourceConfig {

    public ApplicationConfig() {
        packages("team.verzinwat.cms.webservices");
    }
}
