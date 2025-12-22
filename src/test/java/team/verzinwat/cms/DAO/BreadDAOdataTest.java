//package team.verzinwat.cms.DAO;
//
//
//import org.junit.jupiter.api.Test;
//
//import team.verzinwat.cms.domains.Bread;
//
//import java.sql.SQLException;
//import java.util.ArrayList;
//
//import static org.junit.jupiter.api.Assertions.*;
//
//public class BreadDAOdataTest {
//
//    @Test
//    void save() throws SQLException {
//        BreadDAOdata dao = new BreadDAOdata();
//        Bread bread = new Bread("TestBread", 2.5, "https://example.com/testbread.jpg");
//
//        boolean result = dao.save(bread);
//
//        assertTrue(result); // check of save() true teruggeeft
//        assertTrue(dao.findAll().contains(bread)); // check of het brood in de lijst staat
//    }
//
//    @Test
//    void update() throws SQLException {
//        BreadDAOdata dao = new BreadDAOdata();
//        Bread updatedBread = new Bread("Baguette", 10.0, "https://example.com/newbaguette.jpg");
//
//        boolean result = dao.update(updatedBread);
//
//        assertTrue(result); // update moet true teruggeven
//        assertTrue(dao.findAll().contains(updatedBread)); // check of de nieuwe data erin staat
//    }
//
//    @Test
//    void delete() {
//        BreadDAOdata dao = new BreadDAOdata();
//        Bread breadToDelete = new Bread("Sourdough", 5.0, "https://example.com/images/sourdough.jpg");
//
//        boolean result = dao.delete(breadToDelete);
//
//        assertTrue(result); // delete moet true teruggeven
//        assertFalse(dao.findAll().contains(breadToDelete)); // check of het brood weg is
//    }
//
//    @Test
//    void findAll() {
//        BreadDAOdata dao = new BreadDAOdata();
//        ArrayList<Bread> allBreads = dao.findAll();
//
//        assertNotNull(allBreads); // check dat de lijst niet null is
//        assertTrue(allBreads.size() > 0); // check dat er minimaal 1 brood in zit
//    }
//}
