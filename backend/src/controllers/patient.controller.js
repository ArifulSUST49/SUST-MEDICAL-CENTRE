'use strict';
const Patient = require('../models/patient.model');
exports.findAll = function(req, res) {
Patient.findAll(function(err, patient) {
  console.log('patient')
  if (err)
  res.send(err);
  console.log('res', patient);
  res.send(patient);
});
};

exports.create = function(req, res) {
    const new_patient =new Patient(req.body);
    //handles null error
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
      res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Patient.create(new_patient, function(err, patient) {
      if (err)
      res.send(err);
      res.json({error:false,message:"Patient added successfully!",data:patient});
    });
    }
    };