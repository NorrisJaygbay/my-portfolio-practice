const express = require('express');
const my_server = express();
const path = require('path');

// Serve static files from the "public" directory
my_server.use(express.static(path.join(__dirname, 'public')));

// Define a simple route
my_server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

my_server.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

my_server.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

my_server.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

// Start the server
const PORT = 1199;
my_server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});