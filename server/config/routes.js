var quotes = require('../controllers/quotes');

module.exports = function(app){

  app.get('/tasks', function(req, res) {
      quotes.index(req,res);
  });

  app.post('/tasks/new', function(req, res) {
      console.log("Successfull received data to server")
      quotes.create(req,res);
  });

  app.delete('/tasks/remove/:id', function(req, res) {
    console.log(" DELETE METHOD CALLED ----ROUTES")
      quotes.delete(req,res)
  });

  app.get('/tasks/:id', function(req, res) {
      quotes.show(req,res);
  });

  app.put('/tasks/:id', function(req, res) {
      quotes.edit(req,res);
  });

}
