import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './home/Home.jsx';
import SavedJobs from './savedJobs/SavedJobs.jsx';
import AppliedJobs from './appliedJobs/AppliedJobs.jsx';
import Timelines from './timelines/Timelines.jsx';
import Feedback from './feedback/Feedback.jsx';
import VerizonInfo from './verizonInfo/VerizonInfo.jsx';
import Login from './login/Login.jsx';
import Signup from './signup/Signup.jsx';

class App extends Component {

    handleClick() {
        console.log('this is:', this);
    }

    render() {
       return (
          <Router>
             <div>
                <div style={{ display:'inline-block' }}><h2>Welcome to Verizon Job Portal</h2></div>
                <div style={{ display:'inline-block' }}>
                    <ul>
                        <li><Link to={'/app/login'}>Login</Link></li>
                        <li><Link to={'/app/signup'}>Signup</Link></li>
                    </ul>
                </div>
                <ul>
                   <li><Link to={'/'}>Career Home</Link></li>
                   <li><Link to={'/app/savedJobs'}>Saved Jobs</Link></li>
                   <li><Link to={'/app/appliedJobs'}>Applied Jobs</Link></li>
                   <li><Link to={'/app/timelines'}>Timelines</Link></li>                   
                   <li><Link to={'/app/feedback'}>Feedback</Link></li>
                   <li><Link to={'/app/verizonInfo'}>Verizon Info</Link></li>
                </ul>
                <hr />
                
                <Switch>
                   <Route exact path='/' component={Home} />
                   <Route exact path='/app/savedJobs' component={SavedJobs} />
                   <Route exact path='/app/appliedJobs' component={AppliedJobs} />
                   <Route exact path='/app/timelines' component={Timelines} />
                   <Route exact path='/app/feedback' component={Feedback} />
                   <Route exact path='/app/verizonInfo' component={VerizonInfo} />
                   <Route exact path='/app/login' component={Login} />
                   <Route exact path='/app/signup' component={Signup} />
                </Switch>
             </div>
          </Router>
       );
    }
 }

export default App;