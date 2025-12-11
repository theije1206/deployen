package team.verzinwat.cms.domain;

public class ProductReservation {

    private int id;
    private int productId;
    private int kanoCount;
    private String rentalDate;
    private String rentalTime;
    private String rentalDuration;
    private String name;
    private String contact;
    private String email;

    public ProductReservation() {}

    public ProductReservation(int productId, int kanoCount, String rentalDate, String rentalTime,
                              String rentalDuration, String name, String contact, String email) {
        this.productId = productId;
        this.kanoCount = kanoCount;
        this.rentalDate = rentalDate;
        this.rentalTime = rentalTime;
        this.rentalDuration = rentalDuration;
        this.name = name;
        this.contact = contact;
        this.email = email;
    }

    // getters & setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public int getProductId() { return productId; }
    public void setProductId(int productId) { this.productId = productId; }

    public int getKanoCount() { return kanoCount; }
    public void setKanoCount(int kanoCount) { this.kanoCount = kanoCount; }

    public String getRentalDate() { return rentalDate; }
    public void setRentalDate(String rentalDate) { this.rentalDate = rentalDate; }

    public String getRentalTime() { return rentalTime; }
    public void setRentalTime(String rentalTime) { this.rentalTime = rentalTime; }

    public String getRentalDuration() { return rentalDuration; }
    public void setRentalDuration(String rentalDuration) { this.rentalDuration = rentalDuration; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getContact() { return contact; }
    public void setContact(String contact) { this.contact = contact; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
}
