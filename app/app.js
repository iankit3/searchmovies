import React from 'react';

// import Sidebar from './components/Sidebar';
import Main from './components/Main';
// import DataBase from './services/indexedDBService';

class App extends React.Component{
  constructor(){
      super();
      this.state = {
          selecteduser:{name:{first:'Ankit'}}
      }
  } 
 
  handleAdd(e){
    DataBase.add();
  }

   handleReadAll(e){
    DataBase.readAll();
   }

  render(){
      return(
          <div className="container-fluid outer" >   
              <div className="container">
                  <h2>simility</h2>
              </div>
              <Main />
          </div>
      )
  }
}

export default App;