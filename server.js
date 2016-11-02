'use strict';

(function() {
  var express = require('express');
  var bodyParser = require('body-parser');
  var app = express();
  
  app.use(bodyParser.json());
  
  app.use('/', express.static('./'));
  
  var server = app.listen(3000, function() {
    var port = server.address().port;
    console.log('App is listening at port %s', port);
  });
})();