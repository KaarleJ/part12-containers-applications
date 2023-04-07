FROM node:16 AS base

WORKDIR /usr/src/app

COPY package.json package.json
COPY package-lock.json package-lock.json

FROM base AS test

RUN npm ci --production

COPY ./ /usr/src/app

RUN CI=true npm test

FROM base AS build

COPY --from=test /usr/src/app /usr/src/app

ENV REACT_APP_BACKEND_URL="http://localhost:8080/api/"

RUN npm run build

FROM nginx:1.20.1

COPY --from=build /usr/src/app/build /usr/share/nginx/html