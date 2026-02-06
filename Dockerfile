# Stage 1: Build
FROM node:lts-alpine as build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npx ng build --configuration production

FROM nginx:alpine

COPY --from=build /app/dist/app-portfolio/browser /usr/share/nginx/html

EXPOSE 4200

CMD ["nginx", "-g", "daemon off;"]
