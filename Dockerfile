# Build stage
FROM maven:3.9.12-eclipse-temurin-17 AS build
WORKDIR /app
COPY . ./
RUN mvn -DskipTests -B clean package

# Runtime stage
FROM tomcat:10.1-jdk17
WORKDIR /usr/local/tomcat
COPY --from=build /app/target/cms-1.0-SNAPSHOT.war /usr/local/tomcat/webapps/ROOT.war
EXPOSE 8080
CMD ["catalina.sh","run"]
