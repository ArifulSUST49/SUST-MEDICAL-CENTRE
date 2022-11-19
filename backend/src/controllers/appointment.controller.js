'use strict';
const Appointment = require('../models/appointment.model');
exports.findAll = function(req, res) {
    Appointment.findAll(function(err, appointment) {
  console.log('appointment')
  if (err)
  res.send(err);
  console.log('res', appointment);
  res.send(appointment);
});
};

exports.create = function(req, res) {
    const new_appointment =new Appointment(req.body);
    //handles null error
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
      res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Appointment.create(new_appointment, function(err, appointment) {
      if (err)
      res.send(err);
      res.json({error:false,message:"Appointment added successfully!",data:appointment});
    });
    }
    };
   
    
  
  
