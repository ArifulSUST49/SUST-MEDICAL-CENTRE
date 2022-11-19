'use strict';
const Prescription = require('../models/prescription.model');
exports.findAll = function(req, res) {
    Prescription.findAll(function(err, prescription) {
  console.log('prescription')
  if (err)
  res.send(err);
  console.log('res', prescription);
  res.send(prescription);
});
};

exports.create = function(req, res) {
    const new_prescription =new Prescription(req.body);
    //handles null error
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
      res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Prescription.create(new_prescription, function(err, prescription) {
      if (err)
      res.send(err);
      res.json({error:false,message:"Prescription added successfully!",data:prescription});
    });
    }
    };
   