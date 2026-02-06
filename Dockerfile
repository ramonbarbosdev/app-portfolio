# Stage 1: Build do Angular
FROM node:lts-alpine as build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . ./
RUN npx ng build --configuration production

# Stage 2: Servir via Nginx
FROM nginx:alpine

COPY --from=build /app/dist/app-portfolio/browser /usr/share/nginx/html

# Copia config nginx customizada para Angular SPA
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 4200

CMD ["nginx", "-g", "daemon off;"]