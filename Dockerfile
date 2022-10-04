FROM nginx

COPY ./dist /usr/share/nginx/html/
COPY ./nginx /usr/share/nginx/
