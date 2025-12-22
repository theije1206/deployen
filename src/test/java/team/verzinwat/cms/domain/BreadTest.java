package team.verzinwat.cms.domain;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import team.verzinwat.cms.domains.Bread;

class BreadTest {

    @Test
    void shouldNotAllowEmptyNameInConstructor() {
        var errorMessage = Assertions.assertThrows(
                IllegalArgumentException.class,
                () -> new Bread("", 0),
                "Fout: er werd geen IllegalArgumentException gegooid bij een lege naam!"
        );

        Assertions.assertTrue(
                errorMessage.getMessage().contains("should not contain empty fields"),
                "De foutmelding bevat niet de verwachte tekst!"
        );
    }

    @Test
    void setNameShouldThrowOnEmpty() {
        Bread b = new Bread("Test", 2);

        var errorMessage = Assertions.assertThrows(
                IllegalArgumentException.class,
                () -> b.setName(""),
                "Setter accepteert lege naam maar dat mag niet!"
        );

        Assertions.assertTrue(
                errorMessage.getMessage().contains("should not contain empty fields"),
                "De foutmelding bevat niet de verwachte tekst!"
        );
    }

    @Test
    void getNameShouldReturnCorrectValue() {
        Bread b = new Bread("Baguette", 3);
        Assertions.assertEquals("Baguette", b.getName());
    }

    @Test
    void getPriceShouldReturnCorrectValue() {
        Bread b = new Bread("Baguette", 3);
        Assertions.assertEquals(3, b.getPrice());
    }

    @Test
    void setPriceShouldUpdateValue() {
        Bread b = new Bread("Test", 2);
        b.setPrice(5);
        Assertions.assertEquals(5, b.getPrice());
    }
}
