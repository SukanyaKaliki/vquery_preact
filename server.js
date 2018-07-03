const express = require('express');
const path = require('path');
const mongoose= require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());

// var mongodb       = require('./db');
// var routes = require('./routes/routes');

module.exports = app;
model = require('./models/model');
var User = model.User;
var Job = model.Job;
var UserProfile = model.UserProfile;
// API calls
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });

}

app.get('/user/profile',(req,res) =>{
    mongoose.connect('mongodb://localhost:27017/jobPortal');
    var userProfile = new UserProfile({
      user_type : "Employee",
      role : "Manager",
      user_id : "2514018"
    });

    userProfile.save(function(error) {
      console.log("Your user has been saved!");
        res.send("Successfully inserted");
          if (error) {
            console.error(error);
        }
    });
});

app.get('/users/jobs',(req,res)=>{
  mongoose.connect('mongodb://localhost:27017/jobPortal');
  console.log(mongoose.connection.readyState);
  Job.find().then((jobs)=>{
    res.status(200).send(jobs)
  })
  .catch((e)=>{
    res.status(400).send(e);
  });
});

app.get('/users/data',(req,res)=>{
  mongoose.connect('mongodb://localhost:27017/jobPortal');
  console.log(mongoose.connection.readyState);
  User.find().then((user)=>{
    res.status(200).send(user)
  })
  .catch((e)=>{
    res.status(400).send(e);
  });
});


app.listen(port, () => console.log(`Listening on port ${port}`));