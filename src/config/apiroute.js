var express = require('express');

var router = express.Router();

var bodyparser = require('body-parser');

router.use(bodyparser.json());

var db = require('./dbconfig');

var request = new db.Request();

router.get('/selectget', function(req,res) {

    var query = "select * from OT_Department";

    request.query(query,function(err,rows) {
        if (err) { 
            res.status(400).json(err);
        }
        else {
            res.send(rows.recordset);
        }
    });

});

module.exports = router;