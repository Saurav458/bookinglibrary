import React, { Component } from "react";
import axios from "axios";
import "./register.css";
import { Link } from "react-router-dom";
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "",
        email: "",
        password: "",
        //  reEnterPassword: "",
      },
      error: {
        name: "",
        email: "",
        password: "",
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.register = this.register.bind(this);
  }

  handleChange(event) {
    console.log(event);
    if (event.target.name === "name") {
      this.setState({
        user: {
          name: event.target.value,
          email: this.state.user.email,
          password: this.state.user.password,
           reEnterPassword: this.state.user.reEnterPassword,
        },
      });
    } else if (event.target.name === "email") {
      this.setState({
        user: {
          name: this.state.user. name,
          email: event.target.value,
           reEnterPassword: this.state.user.reEnterPassword,
          password: this.state.user.password,
        },
      });
    } else if (event.target.name === "password") {
      this.setState({
        user: {
          name: this.state.user. name,
          email: this.state.user.email,
         reEnterPassword: this.state.user.reEnterPassword,
          password: event.target.value,
        },
      });
    } else if (event.target.name === "reEnterPassword") {
      this.setState({
        user: {
          name: this.state.user. name,
          email: this.state.user.email,
          reEnterPassword: event.target.value,
          password: this.state.user.password,
        },
      });
    }
  }
  register() {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (
      !this.state.user. name &&
      !this.state.user.email &&
      !this.state.user.password
    ) {
      this.setState({
        error: {
          name: "*this field required",
          email: "*this field required",
          password: "*this field required",
        },
      });
    }
    if (
      this.state.user. name &&
      !this.state.user.email &&
      !this.state.user.password
    ) {
      this.setState({
        error: {
          name: "",
          email: "*this field required",
          password: "*this field required",
        },
      });
    }
    if (
      this.state.user. name &&
      this.state.user.email &&
      !this.state.user.password
    ) {
      this.setState({
        error: {
          name: "",
          email: "",
          password: "*this field required",
        },
      });
    }
    if (
      !this.state.user. name &&
      !this.state.user.email &&
      this.state.user.password
    ) {
      this.setState({
        error: {
          name: "*this field required",
          email: "*this field required",
          password: "",
        },
      });
    }
    if (
      this.state.user. name&&
      this.state.user.email &&
      this.state.user.password
    ) {
      this.setState({
        error: {
          name: "",
          email: "",
          password: "",
        },
      });
    }

    if (
      this.state.user. name &&
      this.state.user.email &&
      this.state.user.password.length < 6
    ) {
      this.setState({
        error: {
          name: "",
          email: "",
          password: " enter valid password",
        },
      });
    }
    if (
      !this.state.user. name &&
      this.state.user.email &&
      !this.state.user.password
    ) {
      this.setState({
        error: {
          name: "*this field required",
          email: "",
          password: "*this field required",
        },
      });
    }
    if (
      !this.state.user. name&&
      this.state.user.email &&
      this.state.user.password
    ) {
      this.setState({
        error: {
          name: "*this field required",
          email: "",
          password: "",
        },
      });
    }
    if (
      this.state.user. name &&
      !regex.test(this.state.user.email) &&
      this.state.user.password
    ) {
      this.setState({
        error: {
          name: "",
          email: "enter valid email",
          password: "",
        },
      });
    }
    if (
      this.state.user. name &&
      !this.state.user.email &&
      !this.state.user.password
    ) {
      this.setState({
        error: {
          name: "",
          email: "*this field required",
          password: "*this field required",
        },
      });
    } else if (
      this.state.user. name &&
      !this.state.user.email &&
      this.state.user.password.length < 6
    ) {
      this.setState({
        error: {
          name: "",
          email: "*this field required",
          password: "enter valid password",
        },
      });
    } else if (
      this.state.user. name &&
      !regex.test(this.state.user.email) &&
      this.state.user.password.length < 6
    ) {
      this.setState({
        error: {
          name: "",
          email: "enter valid email",
          password: "enter valid password",
        },
      });
    }
    if (
      this.state.user. name &&
      regex.test(this.state.user.email) &&
      this.state.user.password.length < 6
    ) {
      this.setState({
        error: {
          name: "",
          email: "",
          password: "enter valid password",
        },
      });
    }

    // alert("saurav");
    if (
      this.state.user. name &&
      regex.test(this.state.user.email) &&
      this.state.user.password.length > 6
    ) {
      console.log("post request");
      axios
        .post("http://localhost:8000/register", this.state.user)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  render() {
    return (
      <div className="parent-div-register">
        <img src="https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />

        <div className="register">
          {console.log(this.state.user)}
          <h2>Register</h2>
          {this.state.error.name && (
            <p className="err">{this.state.error.name}</p>
          )}
          <input
            type="text"
            placeholder="Enter your Name"
            name="name"
            value={this.state.user. name}
            onChange={this.handleChange}
          ></input>
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
          {/* <input
            type="password"
            placeholder="Confirm Password"
            name="reEnterPassword"
            value={this.state.user.reEnterPassword}
            onChange={this.handleChange}
          ></input> */}
           <Link to="/">
          <button className="newBtn8">Login</button></Link>
          <div>or</div>
         
            <button className="newBtn8" onClick={this.register}>
              Register
            </button>
        </div>
      </div>
    );
  }
}
export default Register;
