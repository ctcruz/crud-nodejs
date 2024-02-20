FROM node:18

# Create app directory
WORKDIR /app

COPY package*.json ./

RUN npm install
RUN npm install -g nodemon

# Bundle app source
COPY . .

EXPOSE 3000

CMD ["nodemon", "-L", "app/src/server.js"]
