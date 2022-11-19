'use strict';
const Medical_card = require('../models/medical_card.model');
exports.findAll = function(req, res) {
    Medical_card.findAll(function(err, medical_card) {
  console.log('medicali_card')
  if (err)
  res.send(err);
  console.log('res', medical_card);
  res.send(Medical_card);
});
};

exports.create = function(req, res) {
    const new_medical_card =new Medical_card(req.body);
    //handles null error
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
      res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Medical_card.create(new_medical_card, function(err, medical_card) {
      if (err)
      res.send(err);
      res.json({error:false,message:" added successfully!",data:medical_card});
    });
    }
    };