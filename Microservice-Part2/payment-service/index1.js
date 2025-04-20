const express = require('express');
const rateLimit = require('express-rate-limit');

const app = express();
const port = 8084;

// Rate Limiter Configuration (limit requests from a single IP to 100 requests in 15 minutes)
const limiter = rateLimit({
    windowMs: 60, // 15 minutes
    max: 5, // Maximum 100 requests per window
    message: "Too many requests, please try again later."
});

app.use(limiter);

app.use(express.json());

app.get('/payments', (req, res) => {
    res.status(200).send("Payment successful with Rate Limiter applied!");
});

app.listen(port, () => {
    console.log(`Rate Limiter service running at http://localhost:${port}`);
});
