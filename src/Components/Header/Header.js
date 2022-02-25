import React, { Component } from "react";

import "./header.css";
import MenuIcon from "@mui/icons-material/Menu";
import Homepage from "../Homepage/Homepage";
import { Link } from "react-router-dom";
import { Select } from "@mui/material";
import axios from 'axios';
import Search from "../Search/Search";
class Header extends Component {


  render() {
    return (
      <>
      {/* {this.state.isLoggedIn && < Search anyBook={anyBook}/> } */}
      {/* {this.state.istriggered?< Search anyBook={anyBook}/>: ""} */}
      <div className="main1-div">
        <div className="App1">
          <div className="header">
            <div className="left-side">
            
              <MenuIcon className="Icon" >
                
              </MenuIcon>
            </div>
            <div className="middle-side">
        
                 <img src="./images/Icon.jpg" className="img-icon"/>
              <input
                type="text"
                placeholder="Search book by title,author"
                className="input"
                name="any"
               
               
              />
            </div>
            <div className="right-side">
             <Link to="/"> <button type="button" className="newBtn2">
                Log out
              </button></Link>
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
