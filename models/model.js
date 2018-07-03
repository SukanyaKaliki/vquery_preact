// User.js
var mongoose = require('mongoose');  
var schema = mongoose.Schema;

var UserSchema = new schema({  
  name: String,
  email: String,
  password: String
});

/* Mongoose schema for Employee */
var EmployeeSchema = new schema({
    first_name : String,
    last_name : String,
    emp_id : String,
    email : String,
    contact_no : String,
    ref_no : String,
    user_id_f : String
});

/* Mongoose schema for UserProfile */
var UserProfileSchema = new schema({
    user_type : String,
	role : String,
	user_id : {type : String, default: ''}
});

/* Mongoose schema for job */
var JobSchema = new schema({
	job_code : String,
    job_desc : String,
    job_title : String,
    job_Category : String,
    job_location : String,
    job_created_date : Date,
    skillSet : String,
    job_type : String,
    job_reg : String,
    job_status : String,
    job_applying_date : { type: Date, default: Date.now }
});

/* Mongoose schema for candidateInfo */
var CandidateInfoSchema = new schema({
	firstname : String,
    lastname : String,
    dob : Date,
    candiate_id : String,
    address : String,
    email : Date,
    contact_no : String,
    candidate_location : String,
    candiate_profile_id : String,
    user_id : String,
    job_applying_date : { type: Date, default: Date.now }
});

/* Mongoose schema for candidateProfile */
var CandidateProfileSchema = new schema({
	qualification : String,
    past_experience : String,
    candidate_name : Date,
    candiate_id : String,
    address : String,
    email : Date,
    contact_no : String,
    candidate_location : String,
    candidate_profile_id : String,
    skillset : String
    
});

module.exports = {
    User : mongoose.model('User', UserSchema,'User'),
    Employee : mongoose.model('Employee', EmployeeSchema,'Employee'),
    UserProfile : mongoose.model('UserProfile', UserProfileSchema,'User_Profile'),    
    Job : mongoose.model('Job', JobSchema,'Jobs'),
    candidate_info : mongoose.model('candidate_info', CandidateInfoSchema,'candidate_info'),    
    candidate_profile : mongoose.model('candidate_profile', CandidateProfileSchema,'candidate_profile') 
    
}