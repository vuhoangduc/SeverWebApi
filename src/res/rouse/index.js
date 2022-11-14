const newControler = require('./new');

function route(app){
    
    app.use('/new',newControler)
    app.get('/', (req, res) => {
        res.render('home')
      })
      app.get('/search', (req, res) => {
        res.render('search')
      })
}

module.exports = route;