package team.verzinwat.cms.DAO;

import java.sql.SQLException;

public class MAin {
//    public static void main(String[] args) {
//        try {
//            //NOT THE WAY, A WAY OF QUICK TESTING
//            BookingDAO bookingDAO = new BookingDaoPostgres(BookingConnection.getConnection());
//            var allBookings = bookingDAO.findAll(); //WON'T RETURN ANYTHING NOW, Click-through
//            for (Booking booking : allBookings) {
//                System.out.println(booking);
//            }
//        } catch (SQLException e) {
//            e.printStackTrace();
//            System.out.println("Error in getting BookingDAO");
//        } catch (ClassNotFoundException e) {
//            throw new RuntimeException(e);
//        }
//    }

    public static void main(String[] args) {
        try{
            //DatabaseAdminDAO dbdao = new DatabaseAdminDAOPostgres(DatabaseConnection.getConnection());
            //dbdao.initialize();

            UserDAO userDAO = new UserDaoPostgres(DatabaseConnection.getConnection());
            userDAO.findAll().forEach(System.out::println);
        } catch (SQLException e) {
            throw new RuntimeException(e);
        } catch (ClassNotFoundException e) {
            throw new RuntimeException(e);
        }
    }
}