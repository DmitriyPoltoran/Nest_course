FROM node:12.13-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN mkdir -p /var/lib/docker/tmp/docker-builder591428669/dist

COPY ./dist ./dist

CMD ["yarn", "start:dev"]
