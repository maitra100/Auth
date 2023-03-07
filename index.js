// create a express app
const express = require('express');
require('./src/redisConnection');
const route = require('./src/routes/route');

const app = express();
const port = 3001;

app.use(express.json());
app.use('/', route);

app.listen(port, () => {
  console.log(`app listening at port ${port}`);
});
