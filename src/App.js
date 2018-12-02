import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Movie';
import Add from './components/Add';
import Search from './components/Search';

class App extends Component {
  constructor () {
    super()

  this.state = {
    films:[{name:"Inspection",note:"****",link:"https://img.osobnosti.cz/film/1598630-dunkirk/dunkirk.jpg"},{name:"Finale",note:"***",link:"https://img7.cdn.cinoche.com/images/d9950b83aa2b969cecb618157e5aaebf.jpg"}],
  search:"",
  name:"",
  note:"",
  link:"",
  modal:false
  }
}
hundleAdd=e=>{
          

  this.setState({
    [e.target.id]: e.target.value
    
    
      })
    }
    searchMovies=(value)=>{
     this.setState({
       search:value.target.value
     })

     
    }
    resetInputs = () => {
      this.setState({
      name:"",
      note:"",
      link:"",
    }) 
    };

    toggleModal = () => {
      this.setState({ modal: !this.state.modal });
    };
    addMovie = () => {
      let { name, note,link } = this.state;
      this.setState({
        films: [...this.state.films, { name, note,link }]
      });
      this.toggleModal();
       this.resetInputs();

    };

  
  render() {
    return (
      <div className="App">
            <Add   
      show={this.state.modal}
      addObj={this.addMovie}
      hundleChange={this.hundleAdd}
      giveName={this.state.name}
      giveLink={this.state.link}
      giveNote={this.state.note}
      />
      <div className="Border">
      
      <div className="Container">
      
      <Search  searchMovie={this.searchMovies}/>
      <div className="cards">  
     <Card 
         movies={this.state.films.filter(
          x =>
            x.name.toUpperCase().indexOf(this.state.search.toUpperCase()) !==
            -1
        )}
        /> 
        <button onClick={this.toggleModal}>+</button>
</div>
      

      
      
      
      
      
      </div>
      <div className="Circle">
      
      
      </div>
      
      </div>
 
      </div>
    );
  }
}

export default App;
