import React, { Component } from "react";
import axios from "axios";
import "./Addbook.css";
import { Link } from "react-router-dom";
class Addbook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        imgUrl: "",
        title: "",
        author: "",
        publisher: "",
        pagecount: "",
        description: "",
        date: "",
      },
      error: {
        imgUrl: "",
        title: "",
        author: "",
        publisher: "",
        pagecount: "",
        description: "",
        date: "",
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.book = this.book.bind(this);
  }

  handleChange(event) {
    console.log(event);
    if (event.target.name === " imgUrl") {
      this.setState({
        user: {
          imgUrl: event.target.value,
          title: this.state.user.title,
          author: this.state.user.author,
          publisher: this.state.user.publisher,
          pagecount: this.state.user.pagecount,
          description: this.state.user.description,
          date: this.state.user.date,
        },
      });
    } else if (event.target.name === "title") {
      this.setState({
        user: {
          imgUrl: this.state.user.imgUrl,
          title: event.target.value,
          author: this.state.user.author,
          publisher: this.state.user.publisher,
          pagecount: this.state.user.pagecount,
          description: this.state.user.description,
          date: this.state.user.date,
        },
      });
    } else if (event.target.name === "author") {
      this.setState({
        user: {
          imgUrl: this.state.user.imgUrl,
          title: this.state.user.title,
          author: event.target.value,
          publisher: this.state.user.publisher,
          pagecount: this.state.user.pagecount,
          description: this.state.user.description,
          date: this.state.user.date,
        },
      });
    } else if (event.target.name === "publisher") {
      this.setState({
        user: {
          imgUrl: this.state.user.imgUrl,
          title: this.state.user.title,
          author: this.state.user.author,
          publisher: event.target.value,
          pagecount: this.state.user.pagecount,
          description: this.state.user.description,
          date: this.state.user.date,
        },
      });
    } else if (event.target.name === "pagecount") {
      this.setState({
        user: {
          imgUrl: this.state.user.imgUrl,
          title: this.state.user.title,
          author: this.state.user.author,
          publisher: this.state.user.publisher,
          pagecount: event.target.value,
          description: this.state.user.description,
          date: this.state.user.date,
        },
      });
    } else if (event.target.name === "description") {
      this.setState({
        user: {
          imgUrl: this.state.user.imgUrl,
          title: this.state.user.title,
          author: this.state.user.author,
          publisher: this.state.user.publisher,
          pagecount: this.state.user.pagecount,
          description: event.target.value,
          date: this.state.user.date,
        },
      });
    } else if (event.target.name === "date") {
      this.setState({
        user: {
          imgUrl: this.state.user.imgUrl,
          title: this.state.user.title,
          author: this.state.user.author,
          publisher: this.state.user.publisher,
          pagecount: this.state.user.pagecount,
          description: this.state.user.description,
          date: event.target.value,
        },
      });
    }
  }
  book() {
    if (
      !this.state.user.imgUrl &&
      !this.state.user.title &&
      !this.state.user.author &&
      !this.state.user.publisher &&
      !this.state.user.pagecount &&
      !this.state.user.description &&
      !this.state.user.date
    ) {
      this.setState({
        error: {
          imgUrl: "*this field required",
          title: "*this field required",
          author: "*this field required",
          publisher: "*this field required",
          pagecount: "*this field required",
          description: "*this field required",
          date: "*this field required",
        },
      });
    }
    if (
      this.state.user.imgUrl &&
      !this.state.user.title &&
      !this.state.user.author &&
      !this.state.user.publisher &&
      !this.state.user.pagecount &&
      !this.state.user.description &&
      !this.state.user.date
    ) {
      this.setState({
        error: {
          imgUrl: "",
          title: "*this field required",
          author: "*this field required",
          publisher: "*this field required",
          pagecount: "*this field required",
          description: "*this field required",
          date: "*this field required",
        },
      });
    }
    if (
      this.state.user.imgUrl &&
      this.state.user.title &&
      !this.state.user.author &&
      !this.state.user.publisher &&
      !this.state.user.pagecount &&
      !this.state.user.description &&
      !this.state.user.date
    ) {
      this.setState({
        error: {
          imgUrl: "",
          title: "",
          author: "*this field required",
          publisher: "*this field required",
          pagecount: "*this field required",
          description: "*this field required",
          date: "*this field required",
        },
      });
    }

    if (
      this.state.user.imgUrl &&
      this.state.user.title &&
      this.state.user.author &&
      this.state.user.publisher &&
      !this.state.user.pagecount &&
      !this.state.user.description &&
      !this.state.user.date
    ) {
      this.setState({
        error: {
          imgUrl: "",
          title: "",
          author: "",
          publisher: "",
          pagecount: "*this field required",
          description: "*this field required",
          date: "*this field required",
        },
      });
    }
    if (
      this.state.user.imgUrl &&
      this.state.user.title &&
      this.state.user.author &&
      this.state.user.publisher &&
      this.state.user.pagecount &&
      !this.state.user.description &&
      !this.state.user.date
    ) {
      this.setState({
        error: {
          imgUrl: "",
          title: "",
          author: "",
          publisher: "",
          pagecount: "",
          description: "*this field required",
          date: "*this field required",
        },
      });
    }
    if (
      this.state.user.imgUrl &&
      this.state.user.title &&
      this.state.user.author &&
      this.state.user.publisher &&
      this.state.user.pagecount &&
      this.state.user.description &&
      !this.state.user.date
    ) {
      this.setState({
        error: {
          imgUrl: "",
          title: "",
          author: "",
          publisher: "",
          pagecount: "",
          description: "",
          date: "*this field required",
        },
      });
    }
    if (
      this.state.user.imgUrl &&
      this.state.user.title &&
      this.state.user.author &&
      this.state.user.publisher &&
      this.state.user.pagecount &&
      this.state.user.description &&
      this.state.user.date
    ) {
      axios
        .post("http://localhost:8000/addbook", this.state.addBook)
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
          <h2>Add Book Detail</h2>
          {this.state.error.imgUrl && (
            <p className="err">{this.state.error.imgUrl}</p>
          )}
          <input
            type="text"
            placeholder="Enter imgUrl"
            name=" imgUrl"
            value={this.state.user.imgUrl}
            onChange={this.handleChange}
          ></input>
             {this.state.error.title && (
            <p className="err">{this.state.error.title}</p>
          )}
          <input
            type="text"
            placeholder="Enter Book Title"
            name=" title"
            value={this.state.user.titl}
            onChange={this.handleChange}
          ></input>
            {this.state.error.author && (
            <p className="err">{this.state.error.author}</p>
          )}
          <input
            type="text"
            placeholder="Enter author Name"
            name=" author"
            value={this.state.user.author}
            onChange={this.handleChange}
          ></input>
           {this.state.error.publisher && (
            <p className="err">{this.state.error.publisher}</p>
          )}
          <input
            type="text"
            placeholder="Enter publisher Name"
            name=" publisher"
            value={this.state.user.publisher}
            onChange={this.handleChange}
          ></input>
           {this.state.error.pagecount && (
            <p className="err">{this.state.error.pagecount}</p>
          )}
          <input
            type="text"
            placeholder="Enter PageCount"
            name=" pagecount"
            value={this.state.user.pagecount}
            onChange={this.handleChange}
          ></input>
           {this.state.error.description && (
            <p className="err">{this.state.error.description}</p>
          )}
          <input
            type="text"
            placeholder="Enter Description"
            name="description"
            value={this.state.user.description}
            onChange={this.handleChange}
          ></input>
           {this.state.error.date && (
            <p className="err">{this.state.error.date}</p>
          )}
          <input
            type="text"
            placeholder="Enter Date"
            name=" date"
            value={this.state.user.date}
            onChange={this.handleChange}
          ></input>
          <button className="newBtn8" onClick={this.book}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}
export default Addbook;
