package team.verzinwat.cms.webservices;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.JwtParser;
import io.jsonwebtoken.Jwts;
import jakarta.annotation.Priority;
import jakarta.ws.rs.Priorities;
import jakarta.ws.rs.container.ContainerRequestContext;
import jakarta.ws.rs.container.ContainerRequestFilter;
import jakarta.ws.rs.core.HttpHeaders;
import jakarta.ws.rs.ext.Provider;
import team.verzinwat.cms.services.UserService;
import team.verzinwat.cms.setup.MySecurityContext;


@Provider
@Priority(Priorities.AUTHENTICATION)
public class AuthenticationFilter implements ContainerRequestFilter {
    @Override
    public void filter(ContainerRequestContext requestCtx) {

        boolean isSecure = requestCtx.getSecurityContext().isSecure();
        String scheme = requestCtx
                .getUriInfo()
                .getRequestUri()
                .getScheme();

        // Users are treated as guests, unless a valid JWT is provided, therefor we prepare a securitycontext with no user present
        MySecurityContext msc = new MySecurityContext(null, scheme);
        // We will need to check the authorization header
        String authHeader = requestCtx
                .getHeaderString(HttpHeaders.AUTHORIZATION);

        if (authHeader != null &&
                authHeader.startsWith("Bearer ")) {
            // If this is the case, retrieve the JWT
            String token = authHeader
                    .substring("Bearer".length())
                    .trim();  // Without the space

            try {
                // Validate the token
                JwtParser parser = Jwts.parser()
                        .verifyWith(AuthenticationResource.key).build(); // Use the same key as when creating the JWT
                Claims claims = parser
                        .parseSignedClaims(token).getPayload(); //Retrieve the claims

                String user = claims.getSubject();
                msc = new MySecurityContext(
                        UserService.getUserByName(user), scheme);

                System.out.printf("Valid JWT, processing as %s!%n", user); // Let us see who logs in
            } catch (JwtException | IllegalArgumentException e) {
                System.out.println("Invalid JWT, processing as guest!");
            }
        }

        requestCtx.setSecurityContext(msc);
    }
}
