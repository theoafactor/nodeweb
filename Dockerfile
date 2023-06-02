FROM node:alpine
RUN mkdir -p /home/nodeweb
COPY . /home/nodeweb
WORKDIR /home/nodeweb
RUN npm install
EXPOSE 4343
CMD ["npm", "run", "start"]