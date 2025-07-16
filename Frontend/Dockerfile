FROM node

WORKDIR /Movie_TV_Frontend

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm","run" ,"dev"]
