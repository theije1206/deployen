package team.verzinwat.cms.domain;

public class Product {

    private int id;
    private String naam;
    private double prijs;
    private int capaciteit;

    public Product() {
    }

    public Product(int id, String naam, double prijs, int capaciteit) {
        this.id = id;
        this.naam = naam;
        this.prijs = prijs;
        this.capaciteit = capaciteit;
    }

    public Product(String naam, double prijs, int capaciteit) {
        this.naam = naam;
        this.prijs = prijs;
        this.capaciteit = capaciteit;
    }

    public int getId() {
        return id;
    }

    public String getNaam() {
        return naam;
    }

    public double getPrijs() {
        return prijs;
    }

    public int getCapaciteit() {
        return capaciteit;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setNaam(String naam) {
        this.naam = naam;
    }

    public void setPrijs(double prijs) {
        this.prijs = prijs;
    }

    public void setCapaciteit(int capaciteit) {
        this.capaciteit = capaciteit;
    }
}
