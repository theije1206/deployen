package team.verzinwat.cms.domain;

public class ProductReservation {

    private int productId;
    private int kanoCount;
    private String rentalDate;
    private String rentalTime;
    private String rentalDuration;
    private String name;
    private String contact;
    private String email;

    public ProductReservation() {}

    public ProductReservation(int productId, int kanoCount, String rentalDate, String rentalTime, String rentalDuration,
                              String name, String contact, String email) {

        validateString("Naam", name);
        validateString("Contact", contact);
        validateString("Email", email);
        validateString("Datum", rentalDate);
        validateString("Tijd", rentalTime);
        validateString("Duur", rentalDuration);

        this.productId = productId;
        this.kanoCount = kanoCount;
        this.rentalDate = rentalDate;
        this.rentalTime = rentalTime;
        this.rentalDuration = rentalDuration;
        this.name = name;
        this.contact = contact;
        this.email = email;
    }

    private void validateString(String field, String value) {
        if (value == null || value.isBlank()) {
            throw new IllegalArgumentException(field + " mag niet leeg zijn");
        }
    }

    public int getProductId() { return productId; }
    public int getKanoCount() { return kanoCount; }
    public String getRentalDate() { return rentalDate; }
    public String getRentalTime() { return rentalTime; }
    public String getRentalDuration() { return rentalDuration; }
    public String getName() { return name; }
    public String getContact() { return contact; }
    public String getEmail() { return email; }


    public void setProductId(int productId) { this.productId = productId; }
    public void setKanoCount(int kanoCount) { this.kanoCount = kanoCount; }
    public void setRentalDate(String rentalDate) { this.rentalDate = rentalDate; }
    public void setRentalTime(String rentalTime) { this.rentalTime = rentalTime; }
    public void setRentalDuration(String rentalDuration) { this.rentalDuration = rentalDuration; }
    public void setName(String name) { this.name = name; }
    public void setContact(String contact) { this.contact = contact; }
    public void setEmail(String email) { this.email = email; }
}
