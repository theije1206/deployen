package team.verzinwat.cms.domains.elements;


public final class PhotoTextElement extends Element {
    private String imageUrl;
    private String text;

    public PhotoTextElement(String imageUrl, String text) {
        super(ElementCategory.TYPOGRAPHY);
        this.imageUrl = imageUrl;
        this.text = text;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }
}
