package team.verzinwat.cms.domains;


import java.util.Arrays;
import java.util.List;


public class DashboardData {
    private int[] reservations;
    private List<String> availability;
    private int unreadMessages;
    private List<Bread> catering;
    private Invoice invoice;
    private double turnover;

    public DashboardData(int[] reservations, List<String> availability, int unreadMessages, List<Bread> catering, Invoice invoice, double turnover) {
        this.reservations = reservations;
        this.availability = availability;
        this.unreadMessages = unreadMessages;
        this.catering = catering;
        this.invoice = invoice;
        this.turnover = turnover;
    }

    public int[] getReservations() {
        return reservations;
    }

    public List<String> getAvailability() {
        return availability;
    }

    public int getUnreadMessages() {
        return unreadMessages;
    }

    public List<Bread> getCatering() {
        return catering;
    }

    public Invoice getInvoice() {
        return invoice;
    }

    public double getTurnover() {
        return turnover;
    }

    @Override
    public String toString() {
        return "DashboardData{" +
                "reservations=" + Arrays.toString(reservations) +
                ", availability=" + availability +
                ", unreadMessages=" + unreadMessages +
                ", catering=" + catering +
                ", invoice=" + invoice +
                ", turnover=" + turnover +
                '}';
    }
}