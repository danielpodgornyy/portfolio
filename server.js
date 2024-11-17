const express = require('express');
const path = require('path');
const app = express();
const PORT = 3510;

// MIDDLEWARE

// Set the embedded objects in each html file to public
app.use('/', express.static(path.join(__dirname, '/public')))
// Handle different types of data
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

// ROUTERS
// Page requests
app.get('^/$', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
app.get('/practice', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'practice.html'));
});
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

