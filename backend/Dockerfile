FROM ruby:2.7.1-alpine

ARG WORKDIR
ARG HOST
ARG BACKEND_PORT
ARG DB_HOST
ARG DB_NAME
ARG DB_USERNAME
ARG DB_PASSWORD

ENV RUNTIME_PACKAGES "linux-headers libxml2-dev make gcc libc-dev nodejs tzdata postgresql-dev postgresql git less shared-mime-info"
ENV DEV_PACKAGES     "build-base curl-dev"
ENV HOST             $HOST
ENV PORT             $BACKEND_PORT
ENV DB_HOST          $DB_HOST
ENV DB_NAME          $DB_NAME
ENV DB_USERNAME      $DB_USERNAME
ENV DB_PASSWORD      $DB_PASSWORD
ENV TZ               Asia/Tokyo

WORKDIR ${WORKDIR}

COPY Gemfile* ./

RUN apk update && \
    apk upgrade && \
    apk add --no-cache ${RUNTIME_PACKAGES} && \
    apk add --virtual build-dependencies --no-cache ${DEV_PACKAGES} && \
    bundle install -j4 && \
    apk del build-dependencies

COPY . .

EXPOSE ${PORT}

CMD ["rails" "server" "-b" "${HOST}"]