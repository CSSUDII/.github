###
# Set node version
###
FROM node:16
WORKDIR /usr/src/app

###
# Dockerfile Config
###
ARG PORT = 8080
ARG BUILD_COMMAND = "make"


COPY package*.json ./
COPY yarn.lock ./

RUN yarn
COPY . .

# Build Commands
RUN $BUILD_COMMAND

EXPOSE $PORT
CMD [ "make", "start" ]