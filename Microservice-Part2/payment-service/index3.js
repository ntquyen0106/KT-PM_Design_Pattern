const axios = require('axios');
const axiosRetry = require('axios-retry').default;

// Axios retry configuration
axiosRetry(axios, {
    retries: 3,  // Number of retries
    retryDelay: axiosRetry.exponentialDelay, // Exponential delay between retries
    retryCondition: (error) => error.response && error.response.status >= 500 // Retry on server errors (500)
});

async function makePaymentRequest() {
    try {
        const response = await axios.get('https://echoapp-rho.vercel.app/api/users');
        console.log('Payment successful:', response.data);
    } catch (error) {
        console.error('Payment failed:', error.message);
    }
}

// Execute retry logic
makePaymentRequest();
