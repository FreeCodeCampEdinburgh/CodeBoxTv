FROM node:12.19-alpine3.10

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY ./package.json /usr/src/app/package.json

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . /usr/src/app

# Create app directory
WORKDIR /usr/src/app


EXPOSE 5000
CMD [ "node", "index.js" ]