package team.verzinwat.cms.services;

import team.verzinwat.cms.domain.User;

import java.util.ArrayList;
import java.util.List;

public class UserService {
    private static List<User> users = new ArrayList<>();

    static {
        users.add(new User("piet", "campingowner"));
        users.add(new User("piet paniek"));
    }

    public static String validateLogin(String username, String password) {
        for (User user : users) {
            if (user.hasUserName(username) && user.hasPassword(password)) {
                return user.getRole();
            }
        }
        return null;
    }

    public static User getUserByName(String username) {
        for (User user : users) {
            if (user.hasUserName(username)) {
                return user;
            }
        }
        return null;
    }
}
