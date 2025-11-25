//package team.verzinwat.cms.domain;
//
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.Test;
//
//import static org.junit.jupiter.api.Assertions.*;
//
//class ReservationTest {
//
//    private Reservation reservation;
//
//    @BeforeEach
//    void setUp() {
//        reservation = new Reservation();
//    }
//
//    @Test
//    void testInitialValuesAreNull() {
//        assertNull(reservation.getNaam(), "Naam zou null moeten zijn");
//        assertNull(reservation.getAankomst(), "Aankomst zou null moeten zijn");
//        assertNull(reservation.getVertrek(), "Vertrek zou null moeten zijn");
//        assertNull(reservation.getPlaats(), "Plaats zou null moeten zijn");
//        assertNull(reservation.getStatus(), "Status zou null moeten zijn");
//        assertNull(reservation.getContact(), "Contact zou null moeten zijn");
//    }
//
//    @Test
//    void testSettersAndGetters() {
//        reservation.setNaam("Jan Janssen");
//        reservation.setAankomst("10-10-2025");
//        reservation.setVertrek("12-10-2025");
//        reservation.setPlaats("Kampeerplek A1");
//        reservation.setStatus("Bevestigd");
//        reservation.setContact("0612345678");
//
//        assertEquals("Jan Janssen", reservation.getNaam());
//        assertEquals("10-10-2025", reservation.getAankomst());
//        assertEquals("12-10-2025", reservation.getVertrek());
//        assertEquals("Kampeerplek A1", reservation.getPlaats());
//        assertEquals("Bevestigd", reservation.getStatus());
//        assertEquals("0612345678", reservation.getContact());
//    }
//}