FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build -- --configuration production

# instala serve globalmente
RUN npm install -g serve


EXPOSE 3000


CMD ["npx", "serve", "dist"]