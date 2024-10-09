FROM node:14

#create app directory

WORKDIR /usr/src/app

#Install app dependencies
COPY package.json ./
RUN npm install

# Bundle app source
COPY app.js .

#Copy SSL certificates
COPY cert.pem /etc/ssl/certs/cert.pem
COPY key.pem /etc/ssl/private/key.pem

EXPOSE 443
CMD [ "node", "app.js"]
