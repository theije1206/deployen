package team.verzinwat.cms.DAO;


import team.verzinwat.cms.domains.Order;

import java.util.ArrayList;

public class OrderDAOdata implements OrderDAO {

    private static ArrayList<Order> orderList = new ArrayList<>();

    @Override
    public boolean save(Order order) {
        orderList.add(order);
        return true;
    }

    @Override
    public ArrayList<Order> findAll() {
        return orderList;
    }
}
