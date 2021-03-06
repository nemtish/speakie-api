FROM node:14-alpine

LABEL maintainer="tisma@vitamin2.ch"

WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json /app

RUN npm install -g nodemon babel-cli
RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . /app

# RUN npm install pm2 -g

ENV NODE_ENV=development
ENV DB_URL=mongodb://mongodb:27017/
ENV DB_NAME=speakie
ENV PORT=3000

EXPOSE 3000

CMD [ "npm","run", "dev" ]
# CMD ["pm2-dev", "src/index.js"]
