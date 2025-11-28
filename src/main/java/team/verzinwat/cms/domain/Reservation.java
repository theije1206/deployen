package team.verzinwat.cms.domain;

import java.time.LocalDate;


public class Reservation {

    private int id;
    private String naam;
    private LocalDate aankomst;
    private LocalDate vertrek;
    private String plaats;
    private String status;
    private String contact;

    public Reservation() {
    }

    // Constructor met LocalDate
    public Reservation(int id, String naam, LocalDate aankomst, LocalDate vertrek,
                       String plaats, String status, String contact) {
        validateString("Naam", naam);
        validateDate("Aankomst", aankomst);
        validateDate("Vertrek", vertrek);
        validateString("Plaats", plaats);
        validateString("Status", status);
        validateString("Contact", contact);

        this.id = id;
        this.naam = naam;
        this.aankomst = aankomst;
        this.vertrek = vertrek;
        this.plaats = plaats;
        this.status = status;
        this.contact = contact;
    }

    // Constructor zonder id
    public Reservation(String naam, LocalDate aankomst, LocalDate vertrek,
                       String plaats, String status, String contact) {
        this(0, naam, aankomst, vertrek, plaats, status, contact);
    }

    private void validateString(String fieldName, String value) {
        if (value == null || value.isBlank()) {
            throw new IllegalArgumentException(fieldName + " mag niet leeg zijn");
        }
    }

    private void validateDate(String fieldName, LocalDate dateValue) {
        if (dateValue == null) {
            throw new IllegalArgumentException(fieldName + " mag niet leeg zijn");
        }
    }

    // getters
    public int getId() { return id; }
    public String getNaam() { return naam; }
    public LocalDate getAankomst() { return aankomst; }
    public LocalDate getVertrek() { return vertrek; }
    public String getPlaats() { return plaats; }
    public String getStatus() { return status; }
    public String getContact() { return contact; }

    // setters
    public void setId(int id) { this.id = id; }
    public void setNaam(String naam) { this.naam = naam; }
    public void setAankomst(LocalDate aankomst) { this.aankomst = aankomst; }
    public void setVertrek(LocalDate vertrek) { this.vertrek = vertrek; }
    public void setPlaats(String plaats) { this.plaats = plaats; }
    public void setStatus(String status) { this.status = status; }
    public void setContact(String contact) { this.contact = contact; }
}
