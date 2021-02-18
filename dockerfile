FROM node:alpine
WORKDIR /app
COPY . /app
RUN yarn
ENTRYPOINT ["yarn","start"]