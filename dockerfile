FROM node:19-alpine
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . ./
EXPOSE 8080

RUN npm run build

CMD npm start