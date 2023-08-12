const express = require('express');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.post('/', (req, res) => {
  console.warn(req.body);
res.send('Hello, Express!');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
 