package team.verzinwat.cms.application;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import jakarta.ws.rs.ext.ContextResolver;
import jakarta.ws.rs.ext.Provider;

@Provider
public class JerseyConfig implements ContextResolver<ObjectMapper> {

    private final ObjectMapper mapper;

    public JerseyConfig() {
        mapper = new ObjectMapper();
        mapper.registerModule(new JavaTimeModule()); 
    }

    @Override
    public ObjectMapper getContext(Class<?> type) {
        return mapper;
    }
}
