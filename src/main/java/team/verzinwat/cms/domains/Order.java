package team.verzinwat.cms.domains;


public class Order {
    private int id;
    private String breadName;
    private int quantity;

    public Order(int id, String breadName, int quantity) {
        this.id = id;
        this.breadName = breadName;
        this.quantity = quantity;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getBreadName() {
        return breadName;
    }

    public void setBreadName(String breadName) {
        this.breadName = breadName;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    @Override
    public String toString() {
        return "Order{" +
                "id=" + id +
                ", breadName='" + breadName + '\'' +
                ", quantity=" + quantity +
                '}';
    }
}
