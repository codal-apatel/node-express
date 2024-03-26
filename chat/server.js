const http = require('http');
const fs = require('fs');

// Create a server
const server = http.createServer((req, res) => {
    // Serve HTML file
    if (req.url === '/') {
        fs.readFile('index.html', (err, data) => {
            if (err) {
                res.writeHead(500);
                return res.end('Error loading index.html');
            }

            res.writeHead(200);
            res.end(data);
        });
    }
});

// WebSocket implementation
const WebSocket = require('ws');
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
    console.log('Client connected');

    // Broadcast messages to all clients
    ws.on('message', (message) => {
        wss.clients.forEach((client) => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    // Handle client disconnection
    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
