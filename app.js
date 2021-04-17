const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('The first end to end pipeline commit with manual review approval stage!'));

app.get('/', (req, res) => res.send('Rudimentary'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
