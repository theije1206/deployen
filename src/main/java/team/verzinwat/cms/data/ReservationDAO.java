package team.verzinwat.cms.data;

import team.verzinwat.cms.domain.Reservation;

import java.sql.SQLException;
import java.util.List;

public interface ReservationDAO {

    boolean save(Reservation inReservation) throws SQLException;
    boolean update(Reservation inReservation) throws SQLException;
    boolean delete(Reservation inReservation) throws SQLException;
    List<Reservation> findAll() throws SQLException;
}
