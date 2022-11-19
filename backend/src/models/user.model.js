'use strict';
var dbConn = require('../../config/db.config');
var User = function(user){
    this.username     = user.username;
    this.password     = user.password;
    //this.created_at     = new Date();
    //this.updated_at     = new Date();
  };

User.findAll = function (result) {
    dbConn.query("Select * from users", function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    }
    else{
     // console.log('users : ', res);
      result(null, res);
    }
    });
    };

    User.create = function (newEmp, result) {
        dbConn.query("INSERT INTO users set ?", newEmp, function (err, res) {
        if(err) {
          console.log("error: ", err);
          result(err, null);
        }
        else{
          console.log(res.insertId);
          result(null, res.insertId);
        }
        });
        };

module.exports = User;