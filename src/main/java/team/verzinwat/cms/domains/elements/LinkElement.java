package team.verzinwat.cms.domains.elements;


public final class LinkElement extends Element {
    private String link;
    private String title;
    private String type;

    public LinkElement(String title, String link, String type) {
        super(ElementCategory.TYPOGRAPHY);
        this.title = title;
        this.link = link;
        this.type = type;
    }

    public String getTitle() {
        return title;
    }

    public String getLink() {
        return link;
    }

    public String getType() {
        return type;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public void setType(String type) {
        this.type = type;
    }
}
