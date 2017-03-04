FROM node:7.6-alpine
MAINTAINER Blake Watkins "blakemwatkins@gmail.com"

RUN mkdir -p /usr/src/app
RUN mkdir -p /usr/src/app/public
WORKDIR /usr/src/app

EXPOSE 3002

CMD npm run webpack-dev-server
