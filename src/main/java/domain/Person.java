package domain;

import java.time.Instant;
import java.util.Calendar;
import java.util.Date;

public class Person {
    private String name;
    private String email;
    private String phone;
    private String address;
    private Calendar birthdate;

    public Person(String name, String email, String phone, String address, Calendar birthdate) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.birthdate = birthdate;
    }

    @Override
    public String toString() {
        return "Person{" +
                "name='" + name + '\'' +
                ", birthdate=" + birthdate.getTime() +
                '}';
    }

    public static void main(String[] args) {
        Calendar birthdate = Calendar.getInstance();
        birthdate.set(1983, 10, 25);
        var pietje = new Person("Pietje", "pietje@puk.nl", "06123456789", "Petteflet 12", birthdate );
        System.out.println(pietje);

    }

    public String getName() {
        return  name;
    }
}
