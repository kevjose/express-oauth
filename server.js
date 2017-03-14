var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var Beer = require('./models/beer');
var beerController = require('./controllers/beer');

var app = express();

mongoose.connect('mongodb://localhost:27017/beerlocker');

var port = process.env.PORT || 9000;

var router = express.Router();


router.get('/', function(req, res){
  res.send({message: 'You are running low on beers !'});
})

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use('/api', router);

router.route('/beers')
  .post(beerController.postBeers)
  .get(beerController.getBeers);

router.route('/beers/:beer_id')
  .get(beerController.getBeer)
  .put(beerController.putBeer)
  .delete(beerController.deleteBeer);




app.listen(port);

console.log('Insert beer on port: '+port);
