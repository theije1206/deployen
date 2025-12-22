package team.verzinwat.cms.domains.elements;


public final class SvgElement extends Element {
    private String content;

    public SvgElement(String content) {
        super(ElementCategory.OTHER);
        this.content = content;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
