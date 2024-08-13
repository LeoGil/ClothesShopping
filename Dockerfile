# Use uma imagem base do Node.js
FROM node:18-alpine

# Defina o diretório de trabalho no contêiner
WORKDIR /app

# Instale o Vue CLI globalmente
RUN npm install -g @angular/cli

RUN npm install -g json-server

# Copie os arquivos do projeto para o diretório de trabalho do contêiner
COPY . .

# Exponha a porta 4200
EXPOSE 4200
EXPOSE 3000