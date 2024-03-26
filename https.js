const https = require('https');

// Define the API endpoint and options
const options = {
    hostname: 'v2.jokeapi.dev',
    port: 443, // HTTPS port
    path: '/joke/Any?safe-mode',
    method: 'GET',
};

// Make the HTTPS request
const req = https.request(options, (res) => {
    console.log(`Status Code: ${res.statusCode}`);

    let data = '';

    // Accumulate data as it comes in
    res.on('data', (chunk) => {
        data += chunk;
    });

    // When the response is complete, log the data
    res.on('end', () => {
        console.log('Response Body:', data);
    });
});

// Handle errors
req.on('error', (error) => {
    console.error('Error making request:', error);
});

// End the request
req.end();