# Sử dụng image Node.js
FROM node:16

# Thiết lập thư mục làm việc
WORKDIR /app

# Copy file package.json vào container
COPY package.json .

# Cài đặt dependencies
RUN npm install

# Copy mã nguồn vào container
COPY . .

# Expose cổng 3003 cho Customer Service
EXPOSE 3003

# Chạy ứng dụng
CMD ["node", "Server.js"]
