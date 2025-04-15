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

# Expose cổng 3002 cho Order Service
EXPOSE 3002

# Chạy ứng dụng
CMD ["node", "Server.js"]
