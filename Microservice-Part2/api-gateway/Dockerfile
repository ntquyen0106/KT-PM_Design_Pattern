FROM node:16

WORKDIR /app

# Copy package.json và package-lock.json vào container
COPY package*.json ./

# Cài đặt các dependencies từ package.json
RUN npm install

# Copy toàn bộ mã nguồn của dự án vào container
COPY . .

EXPOSE 8080

CMD ["node", "index.js"]
