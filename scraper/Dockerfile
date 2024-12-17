
FROM ghcr.io/puppeteer/puppeteer:latest

RUN apt-get update && apt-get install -y cron

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY index.js .

RUN echo "0 * * * * node /usr/src/app/index.js >> /var/log/cron.log 2>&1" > /etc/cron.d/mycron

RUN chmod 0644 /etc/cron.d/mycron

RUN crontab /etc/cron.d/mycron

RUN touch /var/log/cron.log

CMD node /usr/src/app/index.js >> /var/log/cron.log 2>&1 && cron -f
