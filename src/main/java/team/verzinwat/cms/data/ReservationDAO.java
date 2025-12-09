package team.verzinwat.cms.data;

import team.verzinwat.cms.domain.Reservation;
import java.sql.SQLException;
import java.util.List;

public interface ReservationDAO {

    List<Reservation> findAll() throws SQLException;

    boolean save(Reservation r) throws SQLException;

    boolean update(Reservation r) throws SQLException;

    boolean deleteById(int id) throws SQLException;
}