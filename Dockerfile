FROM node:lts AS runtime
WORKDIR /app

COPY package.json package-lock.json .

RUN npm ci --legacy-peer-deps

COPY . . 

RUN npm run build

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321
CMD node ./dist/server/entry.mjs