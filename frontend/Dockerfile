FROM node:14.4.0-alpine

ARG WORKDIR
ARG HOST
ARG FRONTEND_PORT
ARG BACKEND_BASE_URL
ARG BROWSER_BASE_URL
ARG QIITA_TOKEN

ENV HOST                  $HOST
ENV PORT                  $FRONTEND_PORT
ENV BACKEND_BASE_URL      $BACKEND_BASE_URL
ENV BROWSER_BASE_URL      $BROWSER_BASE_URL
ENV QIITA_TOKEN           $QIITA_TOKEN
ENV TZ                    Asia/Tokyo

WORKDIR ${WORKDIR}

COPY package*.json ./

RUN apk update && \
    apk upgrade && \
    apk add --no-cache make gcc g++ python && \
    npm install && \
    rm -rf /var/cache/apk/*

COPY . .

EXPOSE ${PORT}