const express = require('express');
const app = express();
let path = require('path')
path = path.join(__dirname, 'public', 'main.html')
app.use(express.static('public'))

app.get('/', (req, res) => res.sendFile(path))
app.listen(8800)