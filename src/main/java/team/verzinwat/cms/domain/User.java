package team.verzinwat.cms.domain;

import java.security.Principal;

public class User implements Principal {
    private String username;
    private String password;
    private String role;

    public User(String username, String role) {
        this.username = username;
        this.role = role;
        this.password = "12345";
    }

    public User(String username) {
        this(username, "visitor");
    }

    @Override
    public String getName() {
        return username;
    }

    public String getRole() {
        return role;
    }

    public boolean hasPassword(String password) {
        return this.password.equals(password);
    }

    public boolean hasUserName(String username) {
        return this.username.equals(username);
    }
}
