import React, { Component } from "react";

import "./header.css";
import MenuIcon from "@mui/icons-material/Menu";
// import SearchIcon from "@mui/icons-material/Search";
import Homepage from "../Homepage/Homepage";
import { Link } from "react-router-dom";
import { Select } from "@mui/material";
import axios from 'axios';
import Search from "../Search/Search";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anyBook: [],
      any:"",
      istriggered:false
     
  }
  this.handleChange = this.handleChange.bind(this);
  this.handleClick=this.handleClick.bind(this);
  }
 
  handleChange(event){
    console.log(event.target.value)
this.setState({any:event.target.value})


  }
  handleClick(){
    axios
.post("http://localhost:8000/bookany", this.state.any)
.then(response => console.log(response.data))
.catch((err) => {
  console.log("saurav");
});
  }
  render() {
    return (
      <>
      {this.state.istriggered?< Search/>: ""}
      <div className="main1-div">
        <div className="App1">
          <div className="header">
            <div className="left-side">
            
              <MenuIcon className="Icon" >
                
              </MenuIcon>
            </div>
            <div className="middle-side">
        
                <button onClick={this.handleClick}><img src="./images/Icon.jpg" className="img-icon"/></button>
              <input
                type="text"
                placeholder="Search book by title,author"
                className="input"
                name="any"
                value={this.state.any}
               onChange={this.handleChange}
               
              />
            </div>
            <div className="right-side">
             <Link to="/"> <button type="button" className="newBtn2">
                Log out
              </button></Link>
              {/* <h1>{this.props.email}</h1>  */}
            </div>
          </div>
          <img src="./images/header2.png" alt="arrow" className="img1" />
         
         
         <Homepage/>
        </div>
        </div>
      </>
    );
  }
}
export default Header;
