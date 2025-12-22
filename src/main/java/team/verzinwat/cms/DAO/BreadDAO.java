package team.verzinwat.cms.DAO;

import team.verzinwat.cms.domains.Bread;

import java.sql.SQLException;
import java.util.List;

public interface BreadDAO {
    boolean save(Bread bread) throws SQLException;

    boolean update(Bread bread) throws SQLException;

    boolean delete(Bread bread) throws SQLException;

    List<Bread> findAll() throws SQLException;
}
