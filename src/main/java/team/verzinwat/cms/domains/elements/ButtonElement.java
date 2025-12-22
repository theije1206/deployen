package team.verzinwat.cms.domains.elements;


public final class ButtonElement extends Element {
    private String text;
    private ButtonType buttonType;

    public ButtonElement(String text, ButtonType buttonType) {
        super(ElementCategory.COMPONENTS);
        this.text = text;
        this.buttonType = buttonType;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public ButtonType getButtonType() {
        return buttonType;
    }

    public void setButtonType(ButtonType buttonType) {
        this.buttonType = buttonType;
    }
}
