const express = require('express'); 
const app = express(); 
const router = express.Router(); 


const port = 8080;

// выводим в консоль HTTP METHOD при каждом запросе
router.use(function (req,res,next) {
  console.log('/' + req.method);
  next();
});


router.get('/', function(req,res){
    res.send('ахуенний відончік!! це з вікна чи з вашого двора?)');
});

app.use('/', router);

app.listen(port, function () {
  console.log('Listening on port 80')
})