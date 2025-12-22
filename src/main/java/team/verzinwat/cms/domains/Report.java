package team.verzinwat.cms.domains;


public class Report {
    private int id;
    private String subject;
    private String location;
    private String description;


    Report(int id, String subject, String location, String description) {
        this.id = id;
        this.subject = subject;
        this.location = location;
        this.description = description;
    }

    public String getSubject() {
        return subject;
    }

    public int getId() {
        return id;
    }

    public String getLocation() {
        return location;
    }

    public String getDescription() {
        return description;
    }
}
