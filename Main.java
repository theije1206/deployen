import org.apache.catalina.startup.Tomcat;

public class Main {
    public static void main(String[] args) throws Exception {
        Tomcat tomcat = new Tomcat();
        tomcat.setPort(Integer.parseInt(System.getenv().getOrDefault("PORT", "8080")));
        tomcat.addWebapp("/", new java.io.File("cms-1.0-SNAPSHOT.war").getAbsolutePath());
        tomcat.start();
        tomcat.getServer().await();
    }
}