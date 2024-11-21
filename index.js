const express = require('express');
const path = require('path');
const app = express();

// Get the application name from the environment variable
const appName = process.env.APP_NAME || 'Node App';

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the index page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
  console.log(`Request served by ${appName}`);
});

// Route to serve the about page
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
  console.log(`Request served by ${appName}`);
});

// Start the server on the specified port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`${appName} is running on http://localhost:${PORT}`);
});
