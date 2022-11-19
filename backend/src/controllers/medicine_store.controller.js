'use strict';
const Medicine_store = require('../models/medicine_store.model');
exports.findAll = function(req, res) {
  Medicine_store.findAll(function(err, medicine_store) {
  console.log('medicine_store')
  if (err)
  res.send(err);
  console.log('res', medicine_store);
  res.send(medicine_store);
});
};

exports.create = function(req, res) {
    const new_medicine_store =new Medicine_store(req.body);
    //handles null error
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
      res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
      Medicine_store.create(new_medicine_store, function(err, medicine_store) {
      if (err)
      res.send(err);
      res.json({error:false,message:"Medicine_store added successfully!",data:medicine_store});
    });
    }
    };
   