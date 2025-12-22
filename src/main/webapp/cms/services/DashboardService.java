package team.verzinwat.cms.services;


import team.verzinwat.cms.domains.Bread;
import team.verzinwat.cms.domains.DashboardData;
import team.verzinwat.cms.domains.Invoice;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class DashboardService {
    private final Map<LocalDate, DashboardData> dummyData = new HashMap<>();

    public DashboardService() {

        LocalDate date1 = LocalDate.of(2025, 10, 13);
        dummyData.put(date1, new DashboardData(
                new int[]{3, 5, 2, 6, 4, 1, 0},
                List.of("Veld A: 21", "Veld B: 42"),
                2,
                List.of(
                        new Bread("Baguette", 3.0 ),
                        new Bread("Croissant", 2.5)
                ),
                new Invoice(date1.toString(), 200.0),
                1500.0
        ));

        LocalDate date2 = LocalDate.of(2025, 10, 14);
        dummyData.put(date2, new DashboardData(
                new int[]{1, 2, 0, 3, 5, 2, 1},
                List.of("Veld A: 12", "Veld B: 24"),
                5,
                List.of(
                        new Bread("Frikandelbroodje", 4.0),
                        new Bread("Tijgerbol", 3.5)
                ),
                new Invoice(date2.toString(), 175.75),
                1800.0
        ));

        LocalDate date3 = LocalDate.of(2025, 10, 15);
        dummyData.put(date3, new DashboardData(
                new int[]{24, 100, 80, 37, 64, 33, 4},
                List.of("Veld A: 72", "Veld B: 124"),
                100,
                List.of(
                        new Bread("Frikandelbroodje", 20),
                        new Bread("Broodje Bapao", 22)
                ),
                new Invoice(date2.toString(), 169),
                420
        ));
    }

    public DashboardData getDashboardData(String dateString) {
        LocalDate date = LocalDate.parse(dateString);
        return dummyData.getOrDefault(date, createEmptyDashboard(date));
    }

    private DashboardData createEmptyDashboard(LocalDate date) {
        return new DashboardData(
                new int[]{0, 0, 0, 0, 0, 0, 0},
                List.of("No data for " + date),
                0,
                List.of(),
                new Invoice("0000-00-00", 0.0),
                0.0
        );
    }
}
