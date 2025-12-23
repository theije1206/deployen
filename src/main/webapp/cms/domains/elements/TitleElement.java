package team.verzinwat.cms.domains.elements;


public final class TitleElement extends Element {
    private String title;

    public TitleElement(String title) {
        super(ElementCategory.TYPOGRAPHY);
        this.title = title;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}
