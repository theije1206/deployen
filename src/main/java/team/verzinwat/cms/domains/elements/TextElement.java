package team.verzinwat.cms.domains.elements;


public final class TextElement extends Element {
    private String content;

    public TextElement(String content) {
        super(ElementCategory.TYPOGRAPHY);
        this.content = content;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
