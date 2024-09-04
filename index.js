const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

app.get('/', (req, res) => {
  res.send('Hello Vercel. Way to go');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
