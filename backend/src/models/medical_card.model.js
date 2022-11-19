'use strict';
var dbConn = require('../../config/db.config');
var Medical_card = function(medical_card){
    this.Patient_Reg_No    = medical_card.Patient_Reg_No;
    this.Patient_Name = medical_card.Patient_Name;
    this.Patient_Blood   = medical_card.Patient_Blood;
    this.Patient_Address    = medical_card.Patient_Address;
    this.Patient_session    = medical_card.Patient_session;
    this.Patient_Sex    = medical_card.Patient_Sex;
    this.Patient_Phone_No    = medical_card.Patient_Phone_No;
    this.Patient_Age    = medical_card.Patient_Age;
    //this.Medicine_Available    = medicine.Medicine_Available;
    //this.created_at     = new Date();
    //this.updated_at     = new Date();
  };

Medical_card.findAll = function (result) {
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

    Medical_card.create = function (newEmp, result) {
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

      
module.exports = Medical_card;