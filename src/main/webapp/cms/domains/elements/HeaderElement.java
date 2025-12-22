package team.verzinwat.cms.domains.elements;


public final class HeaderElement extends Element {
    private String imageUrl;
    private String text;

    public HeaderElement(String text, String imageUrl) {
        super(ElementCategory.COMPONENTS);
        this.text = text;
        this.imageUrl = imageUrl;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
}
