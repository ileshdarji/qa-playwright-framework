const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname)));

app.listen(3000, () => {
  console.log('Register app running on http://localhost:3000');
});