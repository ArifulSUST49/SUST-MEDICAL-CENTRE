'use strict';
const Treatment = require('../models/treatment.model');
exports.findAll = function(req, res) {
    Treatment.findAll(function(err, treatment) {
  console.log('treatment')
  if (err)
  res.send(err);
  console.log('res', treatment);
  res.send(treatment);
});
};

exports.create = function(req, res) {
    const new_treatment =new Treatment(req.body);
    //handles null error
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
      res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Treatment.create(new_treatment, function(err, treatment) {
      if (err)
      res.send(err);
      res.json({error:false,message:"Treatment added successfully!",data:treatment});
    });
    }
    };
   