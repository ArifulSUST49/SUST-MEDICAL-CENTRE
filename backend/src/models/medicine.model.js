'use strict';
var dbConn = require('../../config/db.config');
var Medicine = function(medicine){
    this.Medicine_Name    = medicine.Medicine_Name;
    this.Medicine_Quantity = medicine.Medicine_Quantity;
    this.MEdicine_Company_Name   = medicine.MEdicine_Company_Name;
    this.Medicine_Arrival_Date    = medicine.Medicine_Arrival_Date;
    this.Medicine_Expire_Date    = medicine.Medicine_Expire_Date;  
    //this.Medicine_Available    = medicine.Medicine_Available;
    //this.created_at     = new Date();
    //this.updated_at     = new Date();
  };

Medicine.findAll = function (result) {
    dbConn.query("Select Medicine_Name,Medicine_Quantity,Medicine_Expire_Date from tbl_medicine_store ", function (err, res) {
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
        dbConn.query("INSERT INTO tbl_medicine_store set ?", newEmp, function (err, res) {
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