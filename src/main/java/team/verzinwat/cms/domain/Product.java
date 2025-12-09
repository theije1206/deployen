package team.verzinwat.cms.domain;

public class Product {
    private int id;
    private String naam;

    public Product() {}

    public Product(int id, String naam) {
        this.id = id;
        this.naam = naam;
    }

    public Product(String naam) {
        this(0, naam);
    }

    public int getId() { return id; }
    public void setId(int id) { this.id = id; }
    public String getNaam() { return naam; }
    public void setNaam(String naam) { this.naam = naam; }
}

