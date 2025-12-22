package team.verzinwat.cms.domains.elements;


public final class BannerElement extends Element {
    private String text;

    public BannerElement(String content) {
        super(ElementCategory.COMPONENTS);
        this.text = content;
    }

    public String getText() {
        return text;
    }

    public void setText(String content) {
        this.text = content;
    }
}
