import React, { Component } from 'react';
import './AppliedJobs.css';
import experience from './icons/experience.png';
import location from './icons/location.png';

class AppliedJobs extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {};

        //this.state = {firstName: '', lastName: '', emailAddress: '', type: '', contactNumber : '', password : '', confirmPassword: ''};
        this.appliedJobs = [{"jobId":"1", "jobTitle":"Software Engineer", "experience":"12-15yrs", "location":"banglore","keySkills":"java,angular js","savedJob":'false'},
        {"jobId":"2", "jobTitle":"Software Engineer2", "experience":"12-25yrs", "location":"banglore2","keySkills":"java,angular js2","savedJob":'false'},
        {"jobId":"33", "jobTitle":"Software Engineer3", "experience":"12-35yrs", "location":"banglore3","keySkills":"java,angular js1","savedJob":'true'}];
      }

      toggle(thing) {
        this.setState({ collapse: this.state.collapse === thing ? null : thing });
      }

      openDiv(job) {
          alert("job:::"+job);
          this.state = { collapse: this.state.collapse === job ? null : job };
      }
      
   render() {
       var length = this.appliedJobs.length;
       var rows = [];
       for (var i = 0; i < length; i++) {
           var job = this.appliedJobs[i];           
            rows.push(
            <div>
                <div className={"savedJobsDiv"} >
                    <div className={"JobsDiv"}>
                        <div className={"jobTitleDiv"}>{job.jobTitle}</div>
                        <div className={"experienceDiv"}>
                            <img src={ experience } className={"image"} />
                            {job.experience} <img src={ location } className={"image"} /> {job.location}
                        </div>
                    </div>
                </div>
                
                    <div>
                        <div>Job Details:</div>
                        <div>Interview Date:</div>
                        <div>Status:</div>
                        <div>Feedback:</div>
                        <div>Comments:</div>
                    </div>
                
            </div>
            );
       }
      return (
         <div>
            <h2>Applied Jobs</h2>
            {rows}
         </div>         
      );
   }
}

export default AppliedJobs;