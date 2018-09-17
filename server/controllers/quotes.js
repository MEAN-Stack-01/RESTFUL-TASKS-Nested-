const mongoose = require('mongoose');

const TaskSchema  = require('../models/models');

mongoose.model('Task',TaskSchema);
var Task = mongoose.model('Task')

module.exports = {
  index : function(req, res) {
    Task.find({},function(err,tasks){
      if(err) {
        res.json({message: "Error",error: err});
      }
      else{
        res.json({message: "Success",tasks: tasks});
      }
    })
  },

  create : function(req, res) {
      // This is where we would add the user from req.body to the database.
      // var animal = new Animal({name:req.body.name ,weight: req.body.weight,lifespan: req.body.lifespan,diet: req.body.diet,predators: req.body.predators});
      console.log("Received post data",req.body)
      Task.create(req.body, (err, data)=>{
        if(err){
          res.json({message: "Error",error:err});
        }
        else{
          res.json({message: "Success",task: data});
        }
      })
  },
  //
  delete : function(req, res) {
    console.log(" DELETE METHOD CALLED",req.params.id)
    Task.deleteOne({_id:req.params.id}, function(err,data){
      if(err) {
        res.json({message: "Error",error: err});
      }else{
        res.json({message: "Success",task: data});
      }
    });
  },
  //
  show : function(req, res) {
    Task.findOne({_id:req.params.id}, function(err,data){
      if(err) {
        res.json({message: "Error",error: err})
      }else{
        res.json({message: "Success",task: data});
      }
    });
  },

  edit : function(req, res) {
    Task.update({_id:req.params.id},{$set:req.body}, function(err,data){
      if(err) {
        res.json({message: "Error",error: err})
      }else{
        res.json({message: "Success",task: data});
      }
    });
  },
}
