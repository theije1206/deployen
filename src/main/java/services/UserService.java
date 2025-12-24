package services;

import domain.User;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class UserService {

    private static final List<User> users;

    static {
        List<User> temp = new ArrayList<>();
        temp.add(new User("piet", "12345", "campingowner"));
        temp.add(new User("visitor"));
        users = Collections.unmodifiableList(temp);
    }

    public static String validateLogin(String username, String password) {
        if (username == null || password == null) return null;

        for (User user : users) {
            if (user.hasUserName(username) && user.hasPassword(password)) {
                return user.getRole();
            }
        }
        return null;
    }

    public static User getUserByName(String username) {
        if (username == null) return null;

        for (User user : users) {
            if (user.hasUserName(username)) {
                return user;
            }
        }
        return null;
    }

    public static List<User> getAllUsers() {
        return users;
    }
}
