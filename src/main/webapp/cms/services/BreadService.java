package team.verzinwat.cms.services;

import team.verzinwat.cms.DAO.BreadDAO;
import team.verzinwat.cms.domains.Bread;

import java.sql.SQLException;
import java.util.List;

public class BreadService {

    private final BreadDAO breadDAO;

    public BreadService(BreadDAO breadDAO) {
        this.breadDAO = breadDAO;
    }

    public List<Bread> getAllBreads() throws SQLException {
        return breadDAO.findAll();
    }

    public boolean addBread(Bread bread) throws SQLException {
        return breadDAO.save(bread);
    }

    public boolean updateBread(Bread bread) throws SQLException {
        return breadDAO.update(bread);
    }

    public boolean deleteBread(Bread bread) throws SQLException {
        return breadDAO.delete(bread);
    }
}
