'use strict';
var dbConn = require('../../config/db.config');
var Medicine_store = function(medicine_store){
    this.Medicine_Store_ID    = medicine_store.Medicine_Store_ID;
    this.Medicine_Name = medicine_store.Medicine_Name;
    this.Medicine_Quantity  = medicine_store.Medicine_Quantity;
    this.MEdicine_Company_Name    = medicine_store.MEdicine_Company_Name;
    this.Medicine_Arrival_Date    = medicine_store.Medicine_Arrival_Date;  
    this.Medicine_Expire_Date    = medicine_store.Medicine_Expire_Date;
    this.Medicine_Available    = medicine_store.Medicine_Available;
    //this.Medicine_Available    = medicine.Medicine_Available;
    //this.created_at     = new Date();
    //this.updated_at     = new Date();
  };

Medicine_store.findAll = function (result) {
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

    Medicine_store.create = function (newEmp, result) {
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
 
module.exports = Medicine_store;