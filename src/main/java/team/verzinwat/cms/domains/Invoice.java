package team.verzinwat.cms.domains;


public class Invoice {
    private final String date;
    private final double amount;

    public Invoice(String date, double amount) {
        this.date = date;
        this.amount = amount;
    }

    public String getDate() {
        return date;
    }

    public double getAmount() {
        return amount;
    }
}