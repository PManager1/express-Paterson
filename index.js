var express = require ('express');

var app = express();
var router = express.Router();

var sendHello = function (req,res) {
  res.send("Hello!");
}
router.route('/').get(sendHello);

app.use(router);


app.listen(3000, '127.0.0.1', function () {
  console.log(' listing on 3000');
})
