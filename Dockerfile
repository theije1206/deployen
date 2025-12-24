############################
# 1️⃣ Build WAR
############################
FROM maven:3.9.12-eclipse-temurin-17 AS build
WORKDIR /app

COPY pom.xml .
COPY src ./src

RUN mvn clean package -DskipTests

############################
# 2️⃣ Tomcat runtime
############################
FROM tomcat:10.1-jdk17

# Verwijder default apps
RUN rm -rf /usr/local/tomcat/webapps/*

# Deploy WAR als ROOT
COPY --from=build /app/target/*.war /usr/local/tomcat/webapps/ROOT.war

# Zet de env-vars door (worden door Railway ingesteld)
ENV DB_URL=""
ENV DB_USER=""
ENV DB_PASS=""

EXPOSE 8080
CMD ["catalina.sh", "run"]
