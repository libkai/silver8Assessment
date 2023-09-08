# pull official base image
FROM node:14

# set working directory
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@4.0.2 -g --silent

# add app
COPY . ./

EXPOSE 3000

# start app
CMD ["npm", "start"]