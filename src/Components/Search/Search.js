import React, { Component } from "react";
import axios from 'axios';
class Search extends Component {
    constructor(props) {
      super(props);
      this.state = {
        anyBook: [],
        any:""
       
    }
    
    }
   
//     handleChange(event){
//   this.setState({any:event.target.value})
//   axios
//   .post("http://localhost:8000/bookany", this.state.any)
//   .then(response => this.setState({anyBook:response.data}));
//     }
// }
render(){
    return(
        <>
<h1>Hello Search</h1>
        </>
    )
}
}
export default Search