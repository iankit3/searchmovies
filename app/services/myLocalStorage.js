import Data from './data-service';

let myLocalStorage = {

  get(key){
     return JSON.parse( localStorage.getItem(key) );
  },

  save(key){
    return new Promise(function (resolve, reject) {
      if(!localStorage[key]){
         Data.getData('http://starlord.hackerearth.com/simility/movieslisting')
           .then( (res) => {      
              localStorage.setItem(key,res); 
              resolve(localStorage.getItem(key))
          })//.error( (e) => reject(Error(e)) )
      }else{
        // resolve(myLocalStorage.get('mymovieslist').splice(0,50));
        resolve(myLocalStorage.get('mymovieslist') );
      }
    })
  }
}

export default myLocalStorage;