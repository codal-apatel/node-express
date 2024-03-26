const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

let users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' }
];

app.get('/users', (req, res) => {
    return res.json(users);
});

app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    return res.json(user);
});

app.post('/users', (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name
    };
    users.push(newUser);
    return res.status(201).json(newUser);
});

app.put('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    user.name = req.body.name;
    return res.json(user);
});

app.delete('/users/:id', (req, res) => {
    users = users.filter(u => u.id !== parseInt(req.params.id));
    return res.status(204).send();
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    return res.status(500).json({ message: 'Internal server error' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
