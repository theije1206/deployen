package team.verzinwat.cms.webservices;

import jakarta.ws.rs.ApplicationPath;
import jakarta.ws.rs.core.Application;
import java.util.Set;
import java.util.HashSet;

@ApplicationPath("/api")
public class ApplicationConfig extends Application {

    @Override
    public Set<Class<?>> getClasses() {
        Set<Class<?>> resources = new HashSet<>();
        resources.add(RentingResource.class);
        resources.add(ProductReservationResource.class);
        return resources;
    }
}
