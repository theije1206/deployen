package team.verzinwat.cms.domains;

import team.verzinwat.cms.domains.elements.Element;
import team.verzinwat.cms.domains.elements.SvgElement;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

public final class Page {
    private final UUID id;

    private String title;

    private boolean visibility;

    private List<Element> content;

    private SvgElement icon;

    public Page(String title, boolean visibility, SvgElement icon) {
        this.id = UUID.randomUUID();
        this.title = title;
        this.visibility = visibility;
        this.icon = icon;
    }

    public UUID getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public boolean isVisibility() {
        return visibility;
    }

    public void setVisibility(boolean visibility) {
        this.visibility = visibility;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public SvgElement getIcon() {
        return icon;
    }

    public void setIcon(SvgElement icon) {
        this.icon = icon;
    }

    public List<Element> getContent() {
        return content;
    }

    public boolean hasContent() {
        return !content.isEmpty();
    }

    public void setContent(List<Element> elements) {
        content = new ArrayList<>(elements);
    }

    public void addContent(Element element) {
        content.add(element);
    }
}
