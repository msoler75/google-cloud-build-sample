FROM node:12

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
#RUN npm ci --only=production
COPY . .

RUN npm install dotenv

EXPOSE 8080

ENV HOST=0.0.0.0
ENV PORT=8080
ENV NODE_ENV production
# ENV SECRET_KEY=key_is_sesam

# RUN npm run createenv

# RUN npm run build

#start the service
# CMD [ "npm", "run", "start" ]