const express = require('express');
const axios = require('axios');
const opossum = require('opossum');

const app = express();
const port = 8081;

let attemptCount = 0;

// Circuit Breaker Configuration
const circuitBreaker = new opossum(
    () => {
        attemptCount++;
        if (attemptCount < 4) {
            return Promise.reject(new Error('Simulated failure'));
        } else {
            attemptCount = 0;  // Reset the attempt count
            return axios.get('https://echoapp-rho.vercel.app/api/users');
        }
    },
    {
        timeout: 3000, 
        errorThresholdPercentage: 50, 
        resetTimeout: 30000 
    }
);


app.get('/payments', async (req, res) => {
    try {
        const paymentResult = await circuitBreaker.fire();
        res.status(200).json(paymentResult.data);
    } catch (error) {
        res.status(500).json({ error: 'Payment failed', message: error.message });
    }
});

app.listen(port, () => {
    console.log(`Circuit Breaker service running at http://localhost:${port}`);
});
