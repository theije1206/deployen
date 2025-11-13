package team.verzinwat.cms.webservices;

import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import team.verzinwat.cms.services.UserService;

import javax.crypto.SecretKey;
import java.util.Calendar;
import java.util.Map;

@Path("authentication")
public class AuthenticationResource {
    public static final SecretKey key = Jwts.SIG.HS256.key().build(); // Used when signing & parsing the JWT

    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Response authenticateUser(LogonRequest logonRequest) {
        try {
            // Try to find the user and get its role
            String role = UserService
                    .validateLogin(logonRequest.username(), logonRequest.password());

            // Throw exception if role is null
            if (role == null) {
                throw new IllegalArgumentException("Validation failed");
            }

            // User is found, create the JWT
            String token = createToken(logonRequest.username(), role);

            // Return the token
            return Response.ok()
                    .entity(Map.of("JWT", token))
                    .build();

        } catch (JwtException | IllegalArgumentException e) {
            // Something went wrong...
            return Response.status(Response.Status.UNAUTHORIZED)
                    .build();
        }
    }

    private String createToken(String userName, String role) {
        var expiration = Calendar.getInstance();
        expiration.add(Calendar.MINUTE, 30);

        return Jwts.builder()
                .subject(userName)
                .expiration(expiration.getTime())
                .claim("role", role)
                .signWith(key)
                .compact();
    }


}
