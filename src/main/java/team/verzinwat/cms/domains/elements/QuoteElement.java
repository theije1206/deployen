package team.verzinwat.cms.domains.elements;


public final class QuoteElement extends Element {
    private String quote;

    public QuoteElement(String quote) {
        super(ElementCategory.TYPOGRAPHY);
        this.quote = quote;
    }

    public String getQuote() {
        return quote;
    }

    public void setQuote(String quote) {
        this.quote = quote;
    }
}
