const express = require('express')
const morgan = require('morgan')
const { engine } = require ('express-handlebars');
const path = require('path');
const { equal } = require('assert');
const app = express()
const port = 3000
const route = require('./res/rouse')
const db = require('./config/db')

db.connect();
app.use("/styles", express.static(__dirname+'/public'));
app.use(morgan('combined'))
app.engine('handlebars', engine());
app.set('view engine', 'handlebars'); 
app.set('views',path.join(__dirname, 'res/views'))
route(app);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})