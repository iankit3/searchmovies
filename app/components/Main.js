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
        length:0,
        count:[],
        currentFourMovies:[]
    }  
  }

  handleChange(text){
     var MOV =  this.state.movies.filter( (e) => { 
         if(e.movie_title.includes(text) || e.plot_keywords.includes(text) ){
            return e 
           }
         })
     this.setState({ "filteredMovies": MOV, }) 

      var arr = [] , len = MOV.length;
        for(var i=0;i<len;i=i+4){
          arr.push(i);
        }
        this.setState({"count":arr})
  }

  componentDidMount(){
    //  Data.getData('http://starlord.hackerearth.com/simility/movieslisting')
    //  .then( (res) => {
    //       this.setState({movies:res});
    //    })
    myLocalStorage.save('mymovieslist').then( (res) => {
        this.setState({movies:res,filteredMovies:res,length:res.length,currentFourMovies:res.splice(0,4)});
      var MOV = this.state.movies;
      var arr = [] , len = MOV.length;
        for(var i=0;i<len;i=i+4){
          arr.push(i);
        }
        this.setState({"count":arr})
    })
   
  }

  handlePagination(index){
    console.log(index)
    var i = index*4;
    this.setState({ currentFourMovies:this.state.filteredMovies.slice(i, i+4) });
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
                  {this.state.currentFourMovies.map( (e,index) =>{
                  return <Card  {...e} index={index}  key={index} />
                  })}
                </div>
              </div>
                <Page handlePagination={this.handlePagination.bind(this)} count={this.state.count} />
          </div>
      )
  }

}

export default Main;