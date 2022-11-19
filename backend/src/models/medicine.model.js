'use strict';
var dbConn = require('../../config/db.config');
var Medicine = function(medicine){
    this.Medicine_ID   = medicine.Medicine_ID;
    this.Medicine_Name    = medicine.Medicine_Name;
    this.Medicine_Quantity = medicine.Medicine_Quantity;
    this.Medicine_Store_ID   = medicine.Medicine_Store_ID; 
    //this.Medicine_Available    = medicine.Medicine_Available;
    //this.created_at     = new Date();
    //this.updated_at     = new Date();
  };

Medicine.findAll = function (result) {
    dbConn.query("Select Medicine_ID,Medicine_Name,Medicine_Quantity from tbl_medicine ", function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    }
    else{
      console.log('medicine : ', res);
      result(null, res);
    }
    });
    };

    Medicine.create = function (newEmp, result) {
        dbConn.query("INSERT INTO tbl_medicine set ?", newEmp, function (err, res) {
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
   
module.exports = Medicine;