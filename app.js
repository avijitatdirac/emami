var express = require('express');
var app = express();

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(8081, () => console.log('Please go to http://127.0.0.1:8081/'));
