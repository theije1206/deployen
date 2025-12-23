package team.verzinwat.cms.DAO;


import team.verzinwat.cms.domains.Order;

import java.util.ArrayList;

public interface OrderDAO {
    boolean save(Order order);

    ArrayList<Order> findAll();
}
