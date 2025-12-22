package team.verzinwat.cms.domains.elements;


public final class ParagraphElement extends Element {
    private String content;

    public ParagraphElement(String content) {
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
