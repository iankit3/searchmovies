import React, {Component} from 'react'

class Search extends Component {
    constructor(props){
      super(props);
      this.state = {
          text:''
      }
    }

    handleClick(ev){
      let text = ev.target.value;  
      this.setState({"text":text});  
      this.props.handleChange(text);
    }
    
    componentDidMount() {
        // this.props = {
        //     movies:[]
        // }
    }
    

    render () {
        return (
            <div className="row">
               <input
                 onChange={this.handleClick.bind(this)}
                 type="text" name="search" 
                 placeholder="Search (by name or genre)"/>  
            </div>
        )
    }
}

export default Search