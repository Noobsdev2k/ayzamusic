FROM node:14 as build-stage
WORKDIR /frontend
COPY package.json .
RUN npm install
COPY . .
ARG REACT_APP_SERVER_URL
ENV REACT_APP_SERVER_URL=$REACT_APP_SERVER_URL
RUN npm start
# Stage 2
FROM nginx:1.17.0-alpine
COPY --from=build-stage /bezkoder-ui/build /usr/share/nginx/html
EXPOSE $REACT_DOCKER_PORT
CMD nginx -g 'daemon off;'