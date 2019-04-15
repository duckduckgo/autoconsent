FROM ubuntu:18.04

RUN apt-get update && \
  apt-get install -y curl wget libx11-dev libx11-xcb-dev
RUN curl -sL https://deb.nodesource.com/setup_11.x | bash -
RUN apt-get install -y nodejs
RUN node -v

RUN mkdir -p /app/
WORKDIR /app/

COPY package.json /app/
COPY package-lock.json /app/

RUN npm ci
