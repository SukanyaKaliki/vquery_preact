import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {userName: '', password: ''};

        this.userNameChange = this.userNameChange.bind(this);
        this.pwdChange = this.pwdChange.bind(this);
        
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      userNameChange(event) {
        //this.setState({value: event.target.value});
        this.state.userName = event.target.value;
      }

      pwdChange(event) {
        this.state.password = event.target.value;
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.userName+' '+this.state.password);
        //event.preventDefault();
      }

      handleClick(event){
        var apiBaseUrl = "http://localhost:4000/api/";
        var self = this;
        var payload={
        "userName":this.state.userName,
        "password":this.state.password
        }
        axios.post(apiBaseUrl+'login', payload)
            .then(function (response) {
                console.log(response);
                if(response.data.code == 200){
                    console.log("Login successfull");
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
            <h1 className={'red'}>Your Career Account</h1>{"\n"}
            <h2 className={'red'}>Sign In</h2>{"\n"}
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <div className={'labelDiv'}>
                    <label className={'required'}>
                        Username
                        <input type="text" required placeholder='Enter your Username' className={'textBox'} value={this.state.value} onChange={this.userNameChange}/>
                    </label>
                </div>
                <div className={'labelDiv'}>
                    <label className={'required'}>
                        Password
                        <input type="password" required placeholder='Enter your Password' className={'textBox'} value={this.state.value} onChange={this.pwdChange}/>
                    </label>
                </div>
                <input type="submit" className={'submitBtn'} value="Sign in >" />
            </form>
         </div>
      );
   }
}
export default Login;