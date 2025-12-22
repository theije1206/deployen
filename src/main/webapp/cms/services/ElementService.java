package team.verzinwat.cms.services;


import team.verzinwat.cms.domains.elements.Element;

import java.util.ArrayList;
import java.util.List;

public class ElementService {
    private final List<Element> elements = new ArrayList<>();

    public ElementService() {
//        elements.add(test);
    }

    public List<Element> getElements() {
        return elements;
    }
}
