//package team.verzinwat.cms.domain;
//
//import jakarta.validation.Validation;
//import jakarta.validation.Validator;
//import jakarta.validation.ValidatorFactory;
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.Test;
//
//import java.time.LocalDate;
//
//import static org.junit.jupiter.api.Assertions.*;
//
//class ProductReservationTest {
//
//    private Validator validator;
//
//    @BeforeEach
//    void setUp() {
//        ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
//        validator = factory.getValidator();
//    }
//
//    @Test
//    void rentalDateInPastShouldFail() {
//        ProductReservation pr = new ProductReservation();
//        pr.setRentalDate(LocalDate.now().minusDays(1));
//        assertFalse(validator.validate(pr).isEmpty());
//    }
//
//    @Test
//    void rentalDurationAboveMaxShouldFail() {
//        ProductReservation pr = new ProductReservation();
//        pr.setRentalDuration(9);
//        assertFalse(validator.validate(pr).isEmpty());
//    }
//
//    @Test
//    void kanoCountBelowMinShouldFail() {
//        ProductReservation pr = new ProductReservation();
//        pr.setKanoCount(0);
//        assertFalse(validator.validate(pr).isEmpty());
//    }
//
//    @Test
//    void emailInvalidShouldFail() {
//        ProductReservation pr = new ProductReservation();
//        pr.setEmail("niet geldige email");
//        assertFalse(validator.validate(pr).isEmpty());
//    }
//
//    @Test
//    void phoneInvalidShouldFail() {
//        ProductReservation pr = new ProductReservation();
//        pr.setPhone("0712345678");
//        assertFalse(validator.validate(pr).isEmpty());
//    }
//}
