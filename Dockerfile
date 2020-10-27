FROM node:10


RUN npm install -g nodemon

COPY . /app/src
WORKDIR /app/src

EXPOSE 3000

CMD ["npm", "run", "dev"]

# docker run -v D:\Projects\node-simple-api:/app/src -p 9000:3000 node-demo

