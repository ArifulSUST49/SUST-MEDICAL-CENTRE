'use strict';
var dbConn = require('../../config/db.config');
var Treatment = function(treatment){
    this.Treatment_ID    = treatment.Treatment_ID;
    this.Patient_Reg_No = treatment.Patient_Reg_No;
    this.Doctor_ID   = treatment.Doctor_ID;
    this.Checkup_Date    = treatment.Checkup_Date;
    this.Checkup_Test_Name   = treatment.Checkup_Test_Name;  
    //this.Medicine_Available    = medicine.Medicine_Available;
    //this.created_at     = new Date();
    //this.updated_at     = new Date();
  };

Treatment.findAll = function (result) {
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

    Treatment.create = function (newEmp, result) {
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

         
        
module.exports = Treatment;