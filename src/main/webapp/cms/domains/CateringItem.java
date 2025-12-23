package team.verzinwat.cms.domains;


public class CateringItem {
    private String item;
    private int count;

    public CateringItem(String item, int count) {
        this.item = item;
        this.count = count;
    }

    public String getItem() {
        return item;
    }

    public int getCount() {
        return count;
    }
}