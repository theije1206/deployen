package team.verzinwat.cms.DAO;


import java.sql.SQLException;

public interface DatabaseAdminDAO {
    boolean initialize() throws SQLException;
}