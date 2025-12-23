# =========================
# Build stage (Maven)
# =========================
FROM maven:3.9.12-eclipse-temurin-17 AS build
WORKDIR /app

# Kopieer project
COPY . .

# Build WAR
RUN mvn clean package -DskipTests

# =========================
# Runtime stage (Tomcat)
# =========================
FROM tomcat:10.1-jdk17

# Kopieer WAR als ROOT.war
COPY --from=build /app/target/*.war /usr/local/tomcat/webapps/ROOT.war

# Railway gebruikt poort 8080
EXPOSE 8080

# Start Tomcat
CMD ["catalina.sh", "run"]