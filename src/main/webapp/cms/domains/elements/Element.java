package team.verzinwat.cms.domains.elements;


import com.fasterxml.jackson.annotation.*;
import jakarta.validation.constraints.NotNull;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;


@JsonTypeInfo(use = JsonTypeInfo.Id.NAME, include = JsonTypeInfo.As.PROPERTY, property = "_type")
@JsonSubTypes({
        @JsonSubTypes.Type(value = TitleElement.class, name = "TitleElement"),
        @JsonSubTypes.Type(value = SvgElement.class, name = "SvgElement"),
        @JsonSubTypes.Type(value = ParagraphElement.class, name = "ParagraphElement"),
        @JsonSubTypes.Type(value = LinkElement.class, name = "LinkElement"),
        @JsonSubTypes.Type(value = PhotoTextElement.class, name = "PhotoText"),
        @JsonSubTypes.Type(value = QuoteElement.class, name = "QuoteElement"),
        @JsonSubTypes.Type(value = TextElement.class, name = "TextElement"),
        @JsonSubTypes.Type(value = LinkElement.class, name = "LinkElement"),
        @JsonSubTypes.Type(value = HeaderElement.class, name = "HeaderElement"),
        @JsonSubTypes.Type(value = ButtonElement.class, name = "ButtonElement"),
})
public abstract sealed class Element permits BannerElement, ButtonElement, HeaderElement, LinkElement, ParagraphElement, PhotoTextElement, QuoteElement, SvgElement, TextElement, TitleElement {
    private final UUID id;

    private final ElementCategory category;

    @JsonSetter(nulls = Nulls.AS_EMPTY)
    private List<Element> children = new ArrayList<>();

    protected Element(ElementCategory category) {
        this.id = UUID.randomUUID();
        this.category = category;
    }

    public UUID getId() {
        return id;
    }

    public List<Element> getChildren() {
        return children;
    }

    public void setChildren(@NotNull List<Element> children) {
        this.children = new ArrayList<>(children);
    }

    @JsonIgnore
    public boolean hasChildren() {
        return !children.isEmpty();
    }

    public void addChild(@NotNull Element child) {
        children.add(child);
    }

    public ElementCategory getCategory() {
        return category;
    }
}
