FROM nginx:1.25.3-alpine

WORKDIR /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d

COPY ./app/ /usr/share/nginx/html

EXPOSE 80