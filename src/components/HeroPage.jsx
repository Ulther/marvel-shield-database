import React from "react";
import SearchBlock from "./SearchBlock";
import Profile from "./Profile";
import Error from "./Error"
import Loading from "./Loading"

class HeroPage extends React.Component {
  state = { hero: null, searchName: "" ,isLoading:false ,prevSearch:""};

  render() {

    let notFound = false;
    if(this.state.isLoading){
      console.log("LOADING");
   }
   
    if(this.state.hero === "" && this.state.searchName !== ""){
       notFound = true
    }

    return (
      <section className="heroPage">
        <SearchBlock stateUpdater={this.heroSearchNameUpdater} />
        {this.state.isLoading && <Loading />}
        {(this.state.hero) && <Profile heroData={this.state.hero}  />}
        {notFound && <Error searchAttempt={this.state.searchName} />}
      </section>
    );
  }


  componentDidUpdate(prevProps,prevState) {
    if (this.state.searchName!== prevState.searchName){
      this.fetchHeroByName(this.state.searchName);
    }
  };

heroSearchNameUpdater = (searchInput)=>{
  if(searchInput===""){
    this.setState({searchName : searchInput, isLoading:false,prevSearch:searchInput})
   } else if(searchInput===this.state.prevSearch){
    this.setState({isLoading:false})
  }else{
    this.setState({searchName : searchInput, isLoading:true,prevSearch:searchInput})
  }
}


  fetchHeroByName = searchName => {
   
    fetch(`https://www.superheroapi.com/api.php/3136178393064071/search/${searchName}`)
      .then(buffer => {
        return buffer.json();
      })
      .then(({results}) => {
        if(results && results.length>0){
          this.setState({ hero: results,isLoading:false });
          console.log("LOADED");
        }else{
          this.setState({ hero: "" ,isLoading:false});
    
        }
      });
  };


  fetchHeroById = heroId => {
    fetch(`https://www.superheroapi.com/api.php/3136178393064071/${heroId}`)
      .then(buffer => {
        return buffer.json();
      })
      .then(response => {
        this.setState({ hero: response });
      });
  };
}

export default HeroPage;
