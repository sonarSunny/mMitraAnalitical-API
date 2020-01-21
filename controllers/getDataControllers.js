var mysql = require('mysql'); 
var config = require('../config/database'); 
var md5 =require('md5');

exports.getData = function (req, res,next) {  
    var con = mysql.createConnection(config.database);
    console.log(req);
    console.log(con);
    let startDate = new Date();
    let endDate = new Date() - 1;
    console.log("hello "+startDate+"<BR>"+endDate);
    con.query("SELECT callstatus, count(id) as count FROM dialer_log_working WHERE  startdatetime > '2020-01-10' AND  startdatetime < '2020-01-12'   GROUP BY callstatus", function (err, result) {  
    if(err)
    {
      let startDate = new Date();
      console.log(startDate);
      console.log(err);
      con.end();
      res.json({
        type:false,
        data:"No Releases Yet !!"
      });
    }  
    else{
    
      //console.log(result);  
      res.json({
      status:true,
      data:result
    }); 
    }
    });  
    //res.send(result); 
    
  }
  