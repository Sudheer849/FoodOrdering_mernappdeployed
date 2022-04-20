FROM node:14.17.3-buster
WORKDIR /app
COPY package-lock.json /app/package-lock.json
COPY package.json /app/package.json

RUN npm i

COPY . .

CMD ["npm","run","start"]