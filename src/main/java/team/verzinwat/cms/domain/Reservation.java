package team.verzinwat.cms.domain;
public class Reservation {
    private final int id;
    private final String naam;
    private final String aankomst;
    private final String vertrek;
    private final String plaats;
    private final String status;
    private final String contact;

    public Reservation(int id, String naam, String aankomst, String vertrek, String plaats, String status, String contact) {
        validateString("Naam", naam);
        validateString("Aankomst", aankomst);
        validateString("Vertrek", vertrek);
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
    public Reservation(String naam, String aankomst, String vertrek, String plaats, String status, String contact) {
        this(0, naam, aankomst, vertrek, plaats, status, contact);
    }
    private void validateString(String fieldName, String value) {
        if (value == null || value.isBlank()) {
            throw new IllegalArgumentException(fieldName + " mag niet leeg zijn");
        }
    }
    public int getId() { return id; }
    public String getNaam() { return naam; }
    public String getAankomst() { return aankomst; }
    public String getVertrek() { return vertrek; }
    public String getPlaats() { return plaats; }
    public String getStatus() { return status; }
    public String getContact() { return contact; }
}
