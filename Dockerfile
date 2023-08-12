FROM node:14
LABEL author="Lithin"

ADD . /src
WORKDIR /src
RUN npm install --production

CMD ["npm", "start"]