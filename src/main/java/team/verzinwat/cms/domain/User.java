package team.verzinwat.cms.domain;

import java.security.Principal;

public class User implements Principal {
    private final String username;
    private final String password;
    private final String role;

    public User(String username, String password, String role) {
        validateString(username, "Username");
        validateString(password, "Password");
        validateString(role, "Role");

        this.username = username;
        this.password = password;
        this.role = role;
    }

    public User(String username) {
        this(username, "12345", "visitor");
    }

    // Getters
    public String getUsername() { return username; }
    public String getPassword() { return password; }
    public String getRole() { return role; }

    @Override
    public String getName() { return username; }

    public boolean hasPassword(String password) {
        return this.password.equals(password);
    }

    public boolean hasUserName(String username) {
        return this.username.equals(username);
    }

    // Validatie
    private void validateString(String value, String fieldName) {
        if (value == null || value.isBlank()) {
            throw new IllegalArgumentException(fieldName + " mag niet leeg zijn.");
        }
    }
}
