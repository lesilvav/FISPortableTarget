var express = require('express');
var target = require('../controllers/target')
var router = express.Router();


/* GET run Device*/
router.get('/', function(req, res, next) {
  var deviceId = req.query.deviceid;

  target.runPortableSuite(deviceId);

  res.send("Running Portble Suite");
});


module.exports = router;
