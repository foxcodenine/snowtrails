FROM node:18.4.0-buster-slim

WORKDIR /var/www/snowtrails/node_server

COPY src/package.json .

RUN npm install

COPY src .

CMD [ "node", "app.js" ]