FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3333

CMD npm start

LABEL maintener="Marcelo Ataíde<marcelo@email.com>"