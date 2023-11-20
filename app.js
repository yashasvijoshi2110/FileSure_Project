const express = require('express');
const app = express();

// Handling GET request for displaying messages
app.get('/', (req, res) => {
  res.send('Hello, World! This is the sample Node.js App !!');
});

// Health check route
app.get('/health', (req, res) => {
  res.sendStatus(200);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
