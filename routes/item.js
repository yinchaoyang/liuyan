var express = require('express');
var router = express.Router();

var mysql      = require('mysql');
var connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',//administrator
  password : '123456'
});
/* GET home page. */
router.post('/list', function(req, res, next) {
	
  	res.header('Access-Control-Allow-Origin',' *');
  	connection.query('SELECT * FROM baobei.liuyan', function(err, rows, fields) {
  	
  		
	});
	var name=req.body.name;
	var txt=req.body.txt;
	connection.query(`INSERT INTO baobei.liuyan (name,txt) VALUES ('${name}','${txt}')`, function(err,rows,fields) {
		connection.query('SELECT * FROM baobei.liuyan', function(err, rows, fields) {
			
  			res.send(rows)
  		
		});
	});
});

router.post('/shanchu', function(req, res, next) {
	var cc=req.body.uid;
  	res.header('Access-Control-Allow-Origin',' *');

		connection.query('DELETE FROM baobei.liuyan WHERE id='+cc, function(err, rows, fields) {
			
  			res.send(rows)
  		
		});
});
module.exports = router;
