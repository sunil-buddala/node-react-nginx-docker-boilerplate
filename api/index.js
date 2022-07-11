// index.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World from ' + process.env.ASPNETCORE_ENVIRONMENT)
})

app.listen(5000, () => console.log('Server is up and running'));
