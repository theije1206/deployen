package team.verzinwat.cms.domains;

public class Bread {
    private String name;
    private double price;

    public Bread(String name, double price) {
        if (name == null || name.isBlank()) {
            throw new IllegalArgumentException("should not contain empty fields");
        }
        this.name = name;
        this.price = price;
    }

    public Bread() {}

    public String getName() {
        return name;
    }

    public void setName(String name) {
        if (name == null || name.isBlank()) {
            throw new IllegalArgumentException("should not contain empty fields");
        }
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    @Override
    public String toString() {
        return "Bread{" +
                "name='" + name + '\'' +
                ", price=" + price +
                '}';
    }

    private String originalName;

    public void setOriginalName(String originalName){
        this.originalName = originalName;
    }

    public String getOriginalName(){
        return originalName;
    }

}
