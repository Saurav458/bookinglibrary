import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import "./homepage.css";
class Homepage extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    // console.log("saurav");
    // fetch("http://localhost:8000/books")
    //     .then((response) =>console.log(response.json()) )
    //   .then((data) => { console.log(data)
    //     this.setState({ users: data });
    //   });
    axios.get("http://localhost:8000/books")
            .then(response => this.setState({users:response.data}))
            
  }
  render() {
    return (
      <><div className="child-div">
        <h3 className="heading4">Books</h3>
        <a href="/" alt="" className="anchor2">Events</a>
        <button type="button" className="newBtn3"> Add Book </button>
      </div>
        <div className="parent-div">
          {this.state.users.map((curElem) => {
            const { imgUrl, _id, title, description } = curElem;
            // <div key={post._id}></div>

            return (
              <div className="cart-items" key={curElem._id}>
                  <h2 className="heading">{title}</h2>
                  <p className="para">{description}</p>
                 <img src="./images/header2.png" className="img"/>
                  <button type="button" className="newBtn">
                    Borrow Book
                  </button>
                  <a href="/" alt="" className="anchor">
                    View details
                  </a>
              </div>
              
            );
          })}
        </div>
      </>
    );
  }
}

export default Homepage;
