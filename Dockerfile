# Merupakan setup OS / Bahasa pemrograman alpine merupakan os yang paling ringan
FROM node:18.14.2-alpine3.17

# Menentukan virtual directory di dalam container docker
WORKDIR /api-movie/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8050

CMD [ "node", "app.js" ]