import React from "react";

class SearchBlock extends React.Component {

  state = {searchInput: ""}
  
  handleInput = event =>{
    this.setState({searchInput : event.target.value})
  }

  handleSubmit = event =>{
    event.preventDefault()
    const searchinput = this.state.searchInput
    this.setState({searchInput:""})
    this.props.stateUpdater(searchinput)


  }
    render() {
        return(
        <form className="searchBlock" onSubmit={this.handleSubmit}> 
          <label className="inputLabel" htmlFor="searchInput">Search By Name: </label> 
        <input className="searchInput" id="searchInput" value = {this.state.searchInput} placeholder="Name" onChange={this.handleInput}></input> 
        
        <button className="submitButton" type="submit" >Search</button> 
        </form>);
    }
}

export default SearchBlock;
