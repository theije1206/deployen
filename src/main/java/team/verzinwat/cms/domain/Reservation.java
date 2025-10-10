package team.verzinwat.cms.domain;

public class Reservation {
    private int id;
    private String naam;
    private String status;

    public Reservation(int id, String naam, String status) {
        this.id = id;
        this.naam = naam;
        this.status = status;
    }

    public int getId() { return id; }
    public String getNaam() { return naam; }
    public String getStatus() { return status; }

    public void setId(int id) { this.id = id; }
    public void setNaam(String naam) { this.naam = naam; }
    public void setStatus(String status) { this.status = status; }
}
