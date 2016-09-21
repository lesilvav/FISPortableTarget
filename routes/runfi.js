var express = require('express');
var target = require('../controllers/target')
var router = express.Router();


/* GET run Device*/
router.get('/', function(req, res, next) {
  var deviceId = req.query.deviceid;
  var runId = req.query.runid;

  target.runPortableSuite(deviceId,runId);

  res.statusMessage = "Running Portable Suite on device " + deviceId;
  res.send();
});


module.exports = router;
