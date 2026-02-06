FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build -- --configuration production

RUN npm install -g serve

EXPOSE 3000

CMD ["serve", "-s", "dist/app-portfolio", "-l", "3000"]
