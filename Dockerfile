FROM node:7.6-alpine
MAINTAINER Blake Watkins "blakemwatkins@gmail.com"


RUN apk add --update \
  git

RUN mkdir -p /usr/src/app
RUN mkdir -p /usr/src/app/public
WORKDIR /usr/src/app

COPY . /usr/src/app/
RUN npm install --production

EXPOSE 3000

RUN npm run build
CMD npm run start-server
