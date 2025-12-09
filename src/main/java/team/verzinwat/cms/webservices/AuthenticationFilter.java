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

        String scheme = requestCtx.getUriInfo().getRequestUri().getScheme();
        MySecurityContext msc = new MySecurityContext(null, scheme);

        String authHeader = requestCtx.getHeaderString(HttpHeaders.AUTHORIZATION);

        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            String token = authHeader.substring("Bearer ".length()).trim();

            try {
                JwtParser parser = Jwts.parser()
                        .verifyWith(AuthenticationResource.key)
                        .build();

                Claims claims = parser.parseSignedClaims(token).getPayload();

                String username = claims.getSubject();

                var user = UserService.getUserByName(username);

                if (user != null) {
                    System.out.printf("Valid JWT, processing as %s%n", username);
                    msc = new MySecurityContext(user, scheme);
                } else {
                    System.out.println("JWT user not found → unauthorized");
                }

            } catch (JwtException | IllegalArgumentException e) {
                System.out.println("Invalid JWT → unauthorized");
            }
        }

        requestCtx.setSecurityContext(msc);
    }
}
