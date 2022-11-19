'use strict';
const Doctor = require('../models/doctor.model');
exports.findAll = function(req, res) {
Doctor.findAll(function(err, doctor) {
  console.log('doctor')
  if (err)
  res.send(err);
  console.log('res', doctor);
  res.send(doctor);
});
};

exports.create = function(req, res) {
    const new_doctor = new Doctor(req.body);
    //handles null error
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
      res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
    Doctor.create(new_doctor, function(err, doctor) {
      if (err)
      res.send(err);
      res.json({error:false,message:"Doctor added successfully!",data:doctor});
    });
    }
    };
   