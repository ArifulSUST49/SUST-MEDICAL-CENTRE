'use strict';
var dbConn = require('../../config/db.config');
var Prescription = function(prescription){
    this.Patient_Reg_No    = prescription.Patient_Reg_No;
    this.Doctor_ID = prescription.Doctor_ID;
    this.Medical_History   = prescription.Medical_History;
    this.Treatment_ID    = prescription.Treatment_ID;
    this.Medicine_ID   = prescription.Medicine_ID; 
    this.Advice = prescription.Advice; 
    //this.Medicine_Available    = medicine.Medicine_Available;
    //this.created_at     = new Date();
    //this.updated_at     = new Date();
  };

Prescription.findAll = function (result) {
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

    Prescription.create = function (newEmp, result) {
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

        
module.exports = Prescription;