FROM node:9-alpine
COPY . /app
WORKDIR /app
RUN npm install --production --registry=https://registry.npm.taobao.org
EXPOSE 3000
CMD NODE_ENV=production node ./bin/www