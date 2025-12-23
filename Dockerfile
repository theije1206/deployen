# Frontend build
FROM node:20 AS frontend-build
WORKDIR /frontend
COPY frontend/ .
RUN npm install && npm run build

# Backend build
FROM maven:3.9.12-eclipse-temurin-17 AS backend-build
WORKDIR /app
COPY pom.xml .
COPY src/ ./src

# Kopieer frontend build output naar webapp
COPY --from=frontend-build /frontend/build ./src/main/webapp

RUN mvn clean package -DskipTests
