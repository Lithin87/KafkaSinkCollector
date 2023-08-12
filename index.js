const express = require('express');

const app = express();

// Define a route
app.get('/', (req, res) => {
    console.log(req.body);
  res.send('Hello, Express!');
});


const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
