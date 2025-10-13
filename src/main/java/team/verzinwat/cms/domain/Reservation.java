package team.verzinwat.cms.domain;

public class Reservation {
    private String naam;
    private String aankomst;
    private String vertrek;
    private String plaats;
    private String status;
    private String contact;

//    public Reservation() {}

//    public Reservation(String naam, String aankomst, String vertrek, String plaats, String status, String contact) {
//        this.naam = naam;
//        this.aankomst = aankomst;
//        this.vertrek = vertrek;
//        this.plaats = plaats;
//        this.status = status;
//        this.contact = contact;
//    }

    public String getNaam() { return naam; }
    public void setNaam(String naam) { this.naam = naam; }

    public String getAankomst() { return aankomst; }
    public void setAankomst(String aankomst) { this.aankomst = aankomst; }

    public String getVertrek() { return vertrek; }
    public void setVertrek(String vertrek) { this.vertrek = vertrek; }

    public String getPlaats() { return plaats; }
    public void setPlaats(String plaats) { this.plaats = plaats; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public String getContact() { return contact; }
    public void setContact(String contact) { this.contact = contact; }
}
