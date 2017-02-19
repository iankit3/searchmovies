import React from 'react';

import Data from '../services/data-service';
import Card from './Card';
import Search from './Search';
import Page from './Page';
import myLocalStorage from '../services/myLocalStorage';

class Main extends React.Component{
  constructor(props){
      super(props);
    this.state = {
        movies: [],
        filteredMovies:[],
        length:0
    }  
  }

  handleChange(text){
      this.setState({ "filteredMovies": this.state.movies.filter( (e) => { 
         if(e.movie_title.includes(text) || e.plot_keywords.includes(text) ){
            return e 
           }
         })
      }) 
  }

  componentDidMount(){
    //  Data.getData('http://starlord.hackerearth.com/simility/movieslisting')
    //  .then( (res) => {
    //       this.setState({movies:res});
    //    })
    myLocalStorage.save('mymovieslist').then( (res) => {
        this.setState({movies:res,filteredMovies:res,length:res.length});
    })
  }

  /*Infinite loop below */

//   componentWillReceiveProps(prevProps, prevState){
//       this.setState({"length":prevState.filteredMovies.length })
//   }
  

  render(){
      return(
          <div className="container">
            <div className="container-fluid">
                <Search handleChange={this.handleChange.bind(this)}/>
             </div>       
              <div className="row">
                <div className="col-md-12" style={{height:"400px",overflow:"hidden"}}>    
                  {this.state.filteredMovies.map( (e,index) =>{
                  return <Card {...e} index={index}  key={index} />
                  })}
                </div>
              </div>
                <Page listlength={this.state.length} />
          </div>
      )
  }

}

export default Main;