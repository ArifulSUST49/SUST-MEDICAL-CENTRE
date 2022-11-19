'use strict';
var dbConn = require('../../config/db.config');
var Patient = function(patient){
    this.Patient_ID    = patient.Patient_ID;
    this.Patient_Reg_No = patient.Patient_Reg_No; 
    //this.created_at     = new Date();
    //this.updated_at     = new Date();
  };

    Patient.findAll = function (result) {
    dbConn.query("Select Patient_Name, Patient_Reg_No,Patient_Blood,Patient_Address, Patient_session, Patient_Age ,Patient_Sex, Patient_Phone_No  from tbl_patient Inner Join tbl_medical_card On tbl_patient.Patient_Reg_No = tbl_medical_card.Patient_Reg_No", function (err, res) {
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

    Patient.create = function (newEmp, result) {
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
module.exports = Patient;