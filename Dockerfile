# Build frontend
FROM node:20 AS frontend-build
WORKDIR /frontend
COPY frontend/ .
RUN npm install && npm run build

# Build WAR
FROM maven:3.9.12-eclipse-temurin-17 AS build
WORKDIR /app
COPY . .
COPY --from=frontend-build /frontend/build /app/src/main/webapp/frontend
RUN mvn clean package -DskipTests

# Runtime
FROM tomcat:10.1-jdk17
RUN rm -rf /usr/local/tomcat/webapps/ROOT
COPY --from=build /app/target/*.war /usr/local/tomcat/webapps/ROOT.war
EXPOSE 8080
CMD ["catalina.sh", "run"]
