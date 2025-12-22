package team.verzinwat.cms.domains;


import java.util.List;
import java.util.ArrayList;


public class Data {
    private int id;
    private String subject;
    private List<Report> reports;
    private String location;
    private String description;


    Data(int id, String subject, List<Report> reports, String location, String description) {
        this.id = id;
        this.subject = subject;
        this.reports = reports;
        this.location = location;
        this.description = description;
    }

    static public Data getCompany() {
        List<Report> reports = new ArrayList<>();
        reports.add(new Report(1, "Voorraad", "Toilet #1", "Het toiletpapier is bijna op."));
        reports.add(new Report(2, "Opslag", "Sanitaire voorraadkast", "Zeepnavullingen zijn bijna op."));
        reports.add(new Report(3, "Defect", "Douche #1", "De douchekop lekt water."));
        reports.add(new Report(4, "Hygiëne", "Toilet #2", "De vloer is nat en glad."));
        reports.add(new Report(5, "Overig", "Sanitairruimte #1", "De luchtverfrisser werkt niet meer."));
        reports.add(new Report(6, "Opslag", "Sanitaire voorraadkast", "Handdoekrollen zijn bijna op."));
        reports.add(new Report(7, "Defect", "Toilet #3", "De spoelknop blijft hangen."));
        reports.add(new Report(8, "Hygiëne", "Douche #2", "Er ligt veel kalk op de tegels."));
        reports.add(new Report(9, "Overig", "Toilet #4", "De wc-bril zit los."));
        reports.add(new Report(10, "Voorraad", "Sanitairruimte #2", "Handdoekautomaat is leeg."));
        reports.add(new Report(11, "Opslag", "Sanitaire voorraadkast", "Toiletpapierreserves zijn bijna op."));
        reports.add(new Report(12, "Defect", "Douche #3", "De thermostaatkraan werkt niet goed."));
        reports.add(new Report(13, "Hygiëne", "Toilet #5", "Zeepdispenser is leeg."));
        reports.add(new Report(14, "Overig", "Sanitairruimte #3", "Er hangt een vieze geur."));
        reports.add(new Report(15, "Defect", "Toilet #6", "Het water blijft doorlopen."));
        reports.add(new Report(16, "Opslag", "Sanitaire voorraadkast", "Nieuwe schoonmaakdoekjes nodig."));
        reports.add(new Report(17, "Defect", "Douche #4", "De afvoer is verstopt."));
        reports.add(new Report(18, "Hygiëne", "Toilet #7", "De vloer is vuil en moet schoongemaakt worden."));
        reports.add(new Report(19, "Overig", "Sanitairruimte #4", "De verlichting is te zwak."));
        reports.add(new Report(20, "Defect", "Toilet #8", "Het waterreservoir vult langzaam bij."));

        return new Data(1, "MyCompany", reports, "location", "description");
    }

    public int getId() {
        return id;
    }

    public String getSubject() {
        return subject;
    }

    public List<Report> getAllOrders() {
        return reports;
    }

    public String getLocation() {
        return location;
    }

    public String getDescription() {
        return description;
    }
}