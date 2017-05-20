var express = require ('express');

var app = express();
var router = express.Router();

var prepareHello = function (req,res,next) {
  req.hello = "Hello!2";
  next();
}

var sendHello = function (req,res) {
  // res.send("Hello!");
  res.send(req.hello);
}

router.route('/').get(prepareHello, sendHello);

app.use(router);


app.listen(3000, '127.0.0.1', function () {
  console.log(' listing on 3000');
})
