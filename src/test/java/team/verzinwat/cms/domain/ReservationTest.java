//package team.verzinwat.cms.domain;
//
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.Test;
//import java.time.LocalDate;
//
//import static org.junit.jupiter.api.Assertions.*;
//
//class ReservationTest {
//
//    @BeforeEach
//    void setUp() {
//        Reservation reservation = new Reservation();
//    }
//
//    @Test
//    void testVertrekVoorAankomstMagNiet() {
//        LocalDate aankomst = LocalDate.of(2025, 5, 10);
//        LocalDate vertrek = LocalDate.of(2025, 5, 5);
//
//        IllegalArgumentException exception = assertThrows(
//                IllegalArgumentException.class,
//                () -> new Reservation("Jan", aankomst, vertrek, "Plaats", "Status", "Contact")
//        );
//
//        assertEquals("Vertrek mag niet voor aankomst zijn", exception.getMessage());
//    }
//}
