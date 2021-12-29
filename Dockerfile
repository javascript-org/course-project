FROM node:14.16.0 as node 
WORKDIR '/app'
COPY package.json package-lock.json ./
RUN npm install
COPY . .
EXPOSE 4200
CMD ["ng","serve","--host", "0.0.0.0", "--disable-host-check"]
