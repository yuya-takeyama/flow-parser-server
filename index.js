const express = require('express');
const bodyParser = require('body-parser');
const parse = require('flow-parser').parse;
const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());

app.post('/parse', (req, res) => {
  const program = parse(req.body.body);
  res.send(JSON.stringify(program));
});

app.listen(3000, () => {
  console.log('flow-parser-server listening on port 3000!');
});
