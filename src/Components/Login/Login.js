
import React, { Component } from "react";
import axios from "axios";
import "./login.css";
  import { Link } from "react-router-dom";
//  import Header from "../Header/Header";
//  import Dialogbox from "./Components/Popupp/Dialogbox";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
      user: {
        email: "",
        password: "",
      },
      error: {
        email: "",
        password: "",
      }
     };
    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
  }

  handleChange(event) {
    console.log(event);
    if (event.target.name == "email") {
      this.setState({
        user: {
          email: event.target.value,
          password: this.state.user.password,
        },
      });
    } else if (event.target.name == "password") {
      this.setState({
        user: {
          email: this.state.user.email,
          password: event.target.value,
        },
      });
    }
  }
  login() {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (
      !this.state.user.email &&
      !this.state.user.password
    ) {
      this.setState({
        error: {
          email: "*this field required",
          password: "*this field required",
        },
      });
    }
    if (
      this.state.user.email &&
      !this.state.user.password
    ) {
      this.setState({
        error: {
          email: "",
          password: "*this field required",
        },
      });
    }
    if (
     !this.state.user.email &&
      this.state.user.password
    ) {
      this.setState({
        error: {
          email: "*this field required",
          password: "",
        },
      });
    }
   
    if (
      this.state.user.email &&
      this.state.user.password
    ) {
      this.setState({
        error: {
          email: "",
          password: "",
        },
      });
    }

    if (
      this.state.user.email &&
      this.state.user.password.length < 6
    ) {
      this.setState({
        error: {
          email: "",
          password: " enter valid password",
        },
      });
    }
    
    
    if (
      !regex.test(this.state.user.email) &&
      this.state.user.password
    ) {
      this.setState({
        error: {
          email: "enter valid email",
          password: "",
        },
      });
    }
     else if (
      !this.state.user.email &&
      this.state.user.password.length < 6
    ) {
      this.setState({
        error: {
          email: "*this field required",
          password: "enter valid password",
        },
      });
    } else if (
      !regex.test(this.state.user.email) &&
      this.state.user.password.length < 6
    ) {
      this.setState({
        error: {
          email: "enter valid email",
          password: "enter valid password",
        },
      });
    }
    if (
      regex.test(this.state.user.email) &&
      this.state.user.password.length < 6
    ) {
      this.setState({
        error: {
          email: "",
          password: "enter valid password",
        },
      });
    }
    if (
      regex.test(this.state.user.email) &&
      this.state.user.password.length >= 6
    ) {
      
    axios
      .post("http://localhost:8000/login", this.state.user)
      .then((response) =>console.log(response))
      .catch((err) => {
           console.log("saurav");
       });
        // if(res.data.message=="Login Succesfully"){
        //   window.location.href="http://localhost:3000/header";
        // }
      

    }
  }

  render() {
    return (
      //  {this.state.istriggered?<Pop Message={Message}/>: ""}
      <div className="parent-div-login">
        <img src="https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
        <div className="login">
          {console.log(this.state.user)}
          <h2>Login</h2>
          {this.state.error.email && (
            <p className="err">{this.state.error.email}</p>
          )}
          <input
            type="text"
            placeholder="Enter your Email"
            name="email"
            value={this.state.user.email}
            onChange={this.handleChange}
          ></input>
          {this.state.error.password && (
            <p className="err">{this.state.error.password}</p>
          )}
          <input
            type="password"
            placeholder="Enter your Password"
            name="password"
            value={this.state.user.password}
            onChange={this.handleChange}
          ></input>

          <button onClick={this.login} className="newBtn8">
            Login
          </button>
          <div>or</div>
           <Link to="/register"> 
            
             <button className="newBtn8">Register</button>
            </Link> 
        </div>
      </div>
    );
  }
}
export default Login