const path = require('path')
const express = require('express');
const app = express();

const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));

app.set('view engine', 'hbs');

app.get('/', function (req, res) {
  res.render('Index', {
    title: "Home",
    name: "Valtsu"
  });
})

app.get('/about', function (req, res) {
  res.render('index2')
})

app.listen(3000, () => {
    console.log("the server is running on port 3000");
})