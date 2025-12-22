package team.verzinwat.cms.services;

import team.verzinwat.cms.domain.ProductReservation;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

public class ProductReservationService {

    private final List<ProductReservation> reservations = new ArrayList<>();
    private final AtomicInteger nextId = new AtomicInteger(1);

    public ProductReservation addReservation(ProductReservation pr) {
        pr.setId(nextId.getAndIncrement());
        reservations.add(pr);
        return pr;
    }

    public List<ProductReservation> getAllReservations() {
        return reservations;
    }
}
