FROM python:3.10.11-alpine

FROM node:18-alpine as builder
WORKDIR /app
COPY package.json .
RUN npm install --omit=dev
COPY . .
RUN npm run build

FROM nginx:1.25.0-alpine
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html
