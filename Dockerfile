FROM mhart/alpine-node:8.11.3
RUN apk add --no-cache util-linux
WORKDIR /usr/src
COPY yarn.lock package.json ./
RUN yarn
COPY . .
RUN yarn build && mv public /public
