# Fetching the latest node image on alpine linux
FROM node:alpine AS production

# Declaring env
ENV NODE_ENV production
ENV SERVER_ADDR 209.38.240.140:80

# Setting up the work directory
WORKDIR /react-app

# Installing dependencies
COPY ./package.json /react-app
RUN npm install

# Copying all the files in our project
COPY . .

# Starting our application
CMD npm start
