import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './app/home/Home.jsx';
import JobSearch from './app/jobSearch/JobSearch.jsx';
import SavedJobs from './app/savedJobs/SavedJobs.jsx';
import AppliedJobs from './app/appliedJobs/AppliedJobs.jsx';
import Timelines from './app/timelines/Timelines.jsx';
import Feedback from './app/feedback/Feedback.jsx';
import VerizonInfo from './app/verizonInfo/VerizonInfo.jsx';


import logo from './logo.svg';

import './App.css';

class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (      
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">{this.state.response}</p> */}
      
      { <Router>
      <div>
         <div class="header-content">
            <h2>Welcome to Verizon Job Portal</h2>
            <a class="sign-out">Sign Out</a>
         </div>
         <div class="menu-content">
           <ul>
            <li class="active"><Link to={'../'}>Career Home</Link></li>
            <li><Link to={'../app/jobSearch'}>Job Search</Link></li>
            <li><Link to={'../app/savedJobs'}>Saved Jobs</Link></li>
            <li><Link to={'../app/appliedJobs'}>Applied Jobs</Link></li>
            <li><Link to={'../app/timelines'}>Timelines</Link></li>                   
            <li><Link to={'../app/feedback'}>Feedback</Link></li>
            <li><Link to={'../app/verizonInfo'}>Verizon Info</Link></li>
           </ul>
         </div>
         <div class="main-content">
         <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/app/jobSearch' component={JobSearch} />
            <Route exact path='/app/savedJobs' component={SavedJobs} />
            <Route exact path='/app/appliedJobs' component={AppliedJobs} />
            <Route exact path='/app/timelines' component={Timelines} />
            <Route exact path='/app/feedback' component={Feedback} />
            <Route exact path='/app/verizonInfo' component={VerizonInfo} />
         </Switch>
         </div>
      </div>
   </Router> }
   </div>
    );
  }
}

export default App;