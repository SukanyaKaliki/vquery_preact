import React, { Component } from 'react';
import './Home.css';
import experience from './icons/experience.png';
import location from './icons/location.png';
import blackStar from './icons/star-black.png';
import redStar from './icons/star-red.png';

class Home extends Component {
    constructor(props) {
        super(props);

        this.applyForJob = this.applyForJob.bind(this);
        this.saveJob = this.saveJob.bind(this);
        this.unSaveJob = this.unSaveJob.bind(this);

        //this.state = {firstName: '', lastName: '', emailAddress: '', type: '', contactNumber : '', password : '', confirmPassword: ''};
        this.allJobs = [{"jobId":"1", "jobTitle":"Software Engineer", "experience":"12-15yrs", "location":"banglore","keySkills":"java,angular js","savedJob":'false'},
        {"jobId":"2", "jobTitle":"Software Engineer2", "experience":"12-25yrs", "location":"banglore2","keySkills":"java,angular js2","savedJob":'false'},
        {"jobId":"33", "jobTitle":"Software Engineer3", "experience":"12-35yrs", "location":"banglore3","keySkills":"java,angular js1","savedJob":'true'}];
      }

      applyForJob(jobId, event) {
        alert('Job applied successfully:::'+jobId);
        //event.preventDefault();
      }

      saveJob(jobId, event) {
        alert('Saved job successfully:::'+jobId);
      }

      unSaveJob(jobId, event) {
        alert('Un Saved job successfully:::'+jobId);
      }
      
   render() {
       var length = this.allJobs.length;
       var rows = [];
       for (var i = 0; i < length; i++) {
           var job = this.allJobs[i];           
            rows.push(
            <div className={"allJobsDiv"}>
                <div className={"JobsDiv"}>
                    <div className={"jobTitleDiv"}>{job.jobTitle}</div>
                    <div className={"experienceDiv"}>
                        <img src={ experience } className={"image"} /> {job.experience} 
                    </div>
                    <div className="{locationDiv}">
                        <img src={ location } className={"image"} /> {job.location}
                    </div>
                    <div className={"keySkillsDiv"}>{job.keySkills}     
                        <img src={ blackStar } className={job.savedJob === 'true'? 'hidden' : 'image'} onClick={(e) => this.saveJob(job.jobId, e)}/>
                        <img src={ redStar } className={job.savedJob === 'true'? 'image' : 'hidden'} onClick={(e) => this.unSaveJob(job.jobId, e)}/>
                    </div>
                    <div class="center"><button onClick={(e) => this.applyForJob(job.jobId, e)}>Apply</button></div>
                </div>
            </div>
            );
       }
      return (
         <div>
            <h2>All Jobs</h2>
            <div class="job-header">
                <div class="job-head title">Job Title</div>
                <div class="job-head location">Experience</div>
                <div class="job-head location">Location</div>
                <div class="job-head skills">Skills</div>
                <div class="job-head status center">Status</div>
            </div>
            {rows}
         </div>         
      );
   }
}

export default Home;