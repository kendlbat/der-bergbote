# Use a Node.js image as the base image
FROM node:latest

# Install necessary dependencies
RUN apt-get update && apt-get install -y \
    chromium \
    cron \
    --no-install-recommends \
    && rm -rf /var/lib/apt/lists/*

# Set environment variables for Puppeteer to find Chromium
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json if they exist
COPY package*.json ./

# Install app dependencies, including puppeteer
RUN npm ci

# Copy app source code
COPY index.js .

# Setup cron job
RUN echo "node /usr/src/app/index.js >> /var/log/cron.log" > /etc/cron.hourly/mycron

# Give execution rights on the cron job
RUN chmod 0644 /etc/cron.hourly/mycron

# Apply cron job
RUN crontab /etc/cron.hourly/mycron

# Create the log file to be able to run tail
RUN touch /var/log/cron.log

# Run the command on container startup
CMD node /usr/src/app/index.js & cron -f
