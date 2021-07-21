FROM node:12

WORKDIR /usr/src/app

COPY . ./
RUN npm install

EXPOSE 8089

ENV HOST=0.0.0.0
ENV PORT=8089

RUN npm run build

#start the service
CMD [ "npm", "run", "start" ]