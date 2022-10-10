const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ msg: 'Olá Node com Docker!!!!!'});
})

app.listen(3333, () => console.log('Listen port 3333'));
