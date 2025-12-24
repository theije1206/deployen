package data;

import domain.User;

import java.sql.SQLException;
import java.util.List;

public interface UserDAO {

    boolean save(User inUser) throws SQLException;
    boolean update(User inUser) throws SQLException;
    boolean delete(User inUser) throws SQLException;
    List<User> findAll() throws SQLException;
    User findUserByUsername()  throws SQLException;
}
