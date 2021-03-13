FROM node:12.16-alpine As builder

WORKDIR /usr/src/app

COPY package.json ./

RUN yarn install --silent

COPY . .

RUN yarn build

RUN ls -l

FROM node:12.18-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY . .

RUN ls -l

# CMD ["yarn", "start:prod"]