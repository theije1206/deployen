package team.verzinwat.cms.setup;

import jakarta.ws.rs.core.SecurityContext;
import team.verzinwat.cms.domain.User;

import java.security.Principal;

public class MySecurityContext implements SecurityContext {
    private final User user;
    private final String scheme;

    public MySecurityContext(User user, String scheme) {
        this.user = user;
        this.scheme = scheme;
    }

    @Override
    public Principal getUserPrincipal() {
        return user;
    }

    @Override
    public boolean isUserInRole(String role) {
        return user != null && role.equals(user.getRole());
    }

    @Override
    public boolean isSecure() {
        return "https".equalsIgnoreCase(scheme);
    }

    @Override
    public String getAuthenticationScheme() {
        return "Bearer";
    }
}
