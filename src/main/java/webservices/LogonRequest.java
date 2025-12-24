package webservices;

public record LogonRequest(String username, String password) {
    public LogonRequest {
        if (username == null || password == null) {
            throw new IllegalArgumentException("username and password cannot be null");
        }
    }
}
