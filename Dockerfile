FROM node:14.16.0 as node 
WORKDIR '/app'
COPY package.json package-lock.json ./
RUN npm install
COPY . .
EXPOSE 4200
CMD npm run start
