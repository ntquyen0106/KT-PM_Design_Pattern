const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
const port = 8080;

// Proxy các yêu cầu đến các microservices
app.use('/payment', createProxyMiddleware({ target: 'http://localhost:8081', changeOrigin: true }));
app.use('/inventory', createProxyMiddleware({ target: 'http://localhost:8082', changeOrigin: true }));
app.use('/shipping', createProxyMiddleware({ target: 'http://localhost:8083', changeOrigin: true }));

app.listen(port, () => {
    console.log(`API Gateway listening at http://localhost:${port}`);
});

