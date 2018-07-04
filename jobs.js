var mongoose = require('mongoose'); 
var JobsSchema = new mongoose.Schema({  
    // _id: Number,
    job_code : String,
    job_desc: String,
    job_title:String,
    job_category: String,
    job_location: String,
    job_created_date: Date,
    skillset: String,
    job_type: String,
    job_reg: String,
    job_status: String,
    job_applying_date: Date
  
  });

  var Jobs = mongoose.model("Jobs", JobsSchema, "files");
  module.exports = Jobs;