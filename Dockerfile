# =========================
# Frontend build stage
# =========================
FROM node:20 AS frontend-build
WORKDIR /frontend

# Kopieer frontend code
COPY frontend/ .

# Installeer dependencies en build
RUN npm install
RUN npm run build

# =========================
# Backend build stage (Maven)
# =========================
FROM maven:3.9.12-eclipse-temurin-17 AS backend-build
WORKDIR /app

# Kopieer Java project
COPY pom.xml .
COPY src/ ./src

# Kopieer frontend build naar webapp folder
COPY --from=frontend-build /frontend/build ./src/main/webapp

# Maven package WAR
RUN mvn clean package -DskipTests

# =========================
# Runtime stage (Tomcat)
# =========================
FROM tomcat:10.1-jdk17

# Verwijder standaard ROOT
RUN rm -rf /usr/local/tomcat/webapps/ROOT

# Kopieer de WAR als ROOT.war
COPY --from=backend-build /app/target/*.war /usr/local/tomcat/webapps/ROOT.war

# Expose poort 8080
EXPOSE 8080

# Start Tomcat
CMD ["catalina.sh", "run"]
