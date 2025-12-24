package webservices;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.JwtException;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import services.UserService;

import javax.crypto.SecretKey;
import java.util.Calendar;
import java.util.Map;

@Path("/authentication")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class AuthenticationResource {

    public static final SecretKey key = Jwts.SIG.HS256.key().build();

    @POST
    public Response authenticateUser(LogonRequest request) {
        String role = UserService.validateLogin(request.username(), request.password());
        if (role == null) {
            return Response.status(Response.Status.UNAUTHORIZED).build();
        }

        String token = createToken(request.username(), role);

        return Response.ok(Map.of("JWT", token)).build();
    }

    private String createToken(String username, String role) {
        Calendar expiration = Calendar.getInstance();
        expiration.add(Calendar.MINUTE, 30);

        return Jwts.builder()
                .setSubject(username)
                .setExpiration(expiration.getTime())
                .claim("role", role)
                .signWith(key)
                .compact();
    }
}
