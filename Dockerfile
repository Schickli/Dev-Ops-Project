FROM node:20-alpine

WORKDIR /app

COPY ./my-agenda-app/package*.json ./

RUN npm install

COPY ./my-agenda-app/ ./

RUN npm run build

EXPOSE 4173

CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0"]
