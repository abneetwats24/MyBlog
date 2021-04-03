FROM node:10

WORKDIR /app

COPY ./package.json .
RUN npm cache clean --force
RUN npm install --silent --progress=false
COPY . .

EXPOSE 8800

# CMD npm start
CMD [ "node", "app.js" ]