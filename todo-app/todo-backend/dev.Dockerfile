FROM node:16

WORKDIR /usr/src/app

COPY --chown=node:node ./ /usr/src/app

RUN npm ci

USER node
CMD ["npm", "run", "dev"]