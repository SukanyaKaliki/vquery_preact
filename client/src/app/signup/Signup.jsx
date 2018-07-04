import React, { Component } from 'react';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import './Signup.css';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {firstName: '', lastName: '', emailAddress: '', type: '', contactNumber : '', password : '', confirmPassword: ''};

        this.firstNameChange = this.firstNameChange.bind(this);
        this.lastNameChange = this.lastNameChange.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.typeChange = this.typeChange.bind(this);
        this.contactNoChange = this.contactNoChange.bind(this);
        this.pwdChange = this.pwdChange.bind(this);
        this.confirmPwdChange = this.confirmPwdChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      firstNameChange(event) {
        this.state.firstName = event.target.value;
      }

      lastNameChange(event) {
        this.state.lastName = event.target.value;
      }

      emailChange(event) {
        this.state.emailAddress = event.target.value;
      }

      typeChange(event) {
          alert(event.value);
          alert(event.label);
        this.state.type = event.target.value;
      }

      contactNoChange(event) {
        this.state.contactNumber = event.target.value;
      }
      pwdChange(event) {
        this.state.password = event.target.value;
      }

      confirmPwdChange(event) {
        this.state.confirmPassword = event.target.value;
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.firstName+' '+this.state.lastName+' '+this.state.emailAddress+' '+this.type+' '+this.state.contactNumber+' '+this.state.password+' '+this.state.confirmPassword);
        //event.preventDefault();
      }

      handleClick(event){
        var apiBaseUrl = "http://localhost:4000/api/";
        var self = this;
        var payload={
            "firstName":this.state.firstName, 
            "lastName":this.state.firstName, 
            "emailAddress":this.state.firstName,
             "type":this.state.firstName, 
             "contactNumber":this.state.firstName, 
             "password":this.state.firstName
            };
        axios.post(apiBaseUrl+'signup', payload)
            .then(function (response) {
                console.log(response);
                if(response.data.code == 200){
                    console.log("Account Created Successfully");
                    var uploadScreen=[];
                    uploadScreen.push(<UploadScreen appContext={self.props.appContext}/>)
                    self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
                } else if(response.data.code == 204){
                    console.log("Username password do not match");
                    alert("username password do not match")
                } else{
                    console.log("Username does not exists");
                    alert("Username does not exist");
                }
            }).catch(function (error) {
                console.log(error);
            });
    }

   render() {
      return (
         <div>
            <h2 className={'red'}>Sign up</h2>{"\n"}
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <div className={'labelDiv'}>
                    <label className={'required'}>
                        First Name
                        <input type="text" required placeholder='Enter your First Name' className={'firstNameInput'} value={this.state.value} onChange={this.firstNameChange} />
                    </label>
                </div>
                <div className={'labelDiv'}>
                    <label className={'required'}>
                        Last Name
                        <input type="text" required placeholder='Enter your Last Name' className={'lastNameInput'} value={this.state.value} onChange={this.lastNameChange} />
                    </label>
                </div>
                <div className={'labelDiv'}>
                    <label className={'required'}>
                        Email address
                        <input type="email" required placeholder='Enter your Email address' className={'emailInput'} value={this.state.value} onChange={this.emailChange} />
                    </label>
                </div>
                <div className={'labelDiv'}>
                    <label className={'required'}>
                        Type
                        <Dropdown options={options} className={'typeInput'} onChange={this._onSelect} onClick={this.typeChange} value={defaultOption} placeholder="Select an option" />
                    </label>
                </div>                
                <div className={'labelDiv'}>
                    <label className={'required'}>
                        Contact Number
                        <input type="text" required placeholder='Enter your Contact Number' className={'contactNoInput'} value={this.state.value} onChange={this.contactNoChange} />
                    </label>
                </div>
                <div className={'labelDiv'}>
                    <label className={'required'}>
                        Password
                        <input type="password" required placeholder='Enter your Password' className={'pwdInput'} value={this.state.value} onChange={this.pwdChange}/>
                    </label>
                </div>
                <div className={'labelDiv'}>
                    <label className={'required'}>
                        Confirm password
                        <input type="password" required placeholder='Reenter your Password' className={'textBox'} value={this.state.value} onChange={this.confirmPwdChange} />
                    </label>
                </div>
                <input type="submit" className={'submitBtn'} value="Create a career account >" />
            </form>
         </div>
      );
   }
}
const options = [
    { value: 'CD', label: 'Candidate' },
    { value: 'MR', label: 'Manager' },
    { value: 'HR', label: 'HR' }];
const defaultOption = options[0];
export default Signup;