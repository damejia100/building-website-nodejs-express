const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res, next) => {
  res.send('Hello express here')
})

app.listen(port, () => {
  console.log(`express server listening on port ${port}`)
})
