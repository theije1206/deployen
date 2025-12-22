package team.verzinwat.cms.services;


import team.verzinwat.cms.DAO.OrderDAOdata;
import team.verzinwat.cms.domains.Order;

import java.util.ArrayList;

public class OrderService {

    private final OrderDAOdata dao = new OrderDAOdata();

    public boolean addOrder(Order order) {
        return dao.save(order);
    }

    public ArrayList<Order> getAllOrders() {
        return dao.findAll();
    }
}
//Bobby