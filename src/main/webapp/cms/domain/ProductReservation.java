package team.verzinwat.cms.domain;

import jakarta.validation.constraints.*;
import java.time.LocalDate;
import java.time.LocalTime;

public class ProductReservation {

    private int id;

    @NotNull(message = "Product ID mag niet leeg zijn")
    @Min(value = 1, message = "Product ID moet groter zijn dan 0")
    private Integer productId;

    @NotNull(message = "Aantal kano's mag niet leeg zijn")
    @Min(value = 1, message = "Aantal kano's moet minimaal 1 zijn")
    private Integer kanoCount;

    @NotNull(message = "Huurdatum mag niet leeg zijn")
    @FutureOrPresent(message = "Huurdatum mag niet in het verleden liggen")
    private LocalDate rentalDate;

    @NotNull(message = "Huurtijd mag niet leeg zijn")
    private LocalTime rentalTime;

    @NotNull(message = "Huurduur mag niet leeg zijn")
    @Min(value = 1, message = "Huurduur moet minimaal 1 uur zijn")
    @Max(value = 5, message = "Huurduur mag maximaal 5 uur zijn")
    private Integer rentalDuration;

    @NotBlank(message = "Naam mag niet leeg zijn")
    private String name;

    @NotBlank(message = "Telefoonnummer mag niet leeg zijn")
    @Pattern(
            regexp = "^(\\+31|0)6\\d{8}$",
            message = "Ongeldig Nederlands mobiel nummer"
    )
    private String phone;

    @NotBlank(message = "E-mail mag niet leeg zijn")
    @Email(message = "Ongeldig e-mailadres")
    private String email;

    public ProductReservation() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Integer getProductId() {
        return productId;
    }

    public void setProductId(Integer productId) {
        this.productId = productId;
    }

    public Integer getKanoCount() {
        return kanoCount;
    }

    public void setKanoCount(Integer kanoCount) {
        this.kanoCount = kanoCount;
    }

    public LocalDate getRentalDate() {
        return rentalDate;
    }

    public void setRentalDate(LocalDate rentalDate) {
        this.rentalDate = rentalDate;
    }

    public LocalTime getRentalTime() {
        return rentalTime;
    }

    public void setRentalTime(LocalTime rentalTime) {
        this.rentalTime = rentalTime;
    }

    public Integer getRentalDuration() {
        return rentalDuration;
    }

    public void setRentalDuration(Integer rentalDuration) {
        this.rentalDuration = rentalDuration;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
