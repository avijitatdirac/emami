var express = require('express');
var app = express();
const PORT = process.env.PORT || 5000

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
