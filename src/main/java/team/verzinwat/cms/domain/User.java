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

    public User(String username){
        if(username==null || username.isBlank()){
            throw new IllegalArgumentException("username cannot be null or empty");
        }
        this.username = username;
        this.role = "visitor";
        this.password = "12345";
    }
    @Override
    public String getName() {
        return this.username;
    }

    public String getRole() {
        return this.role;
    }

    public boolean hasPassword(String password) {
        return this.password.equals(password);
    }

    public boolean hasUserName(String username) {
        return this.username.equals(username);
    }
}
