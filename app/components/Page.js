import React, {Component} from 'react'

class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count:[],
        }
    }

    componentWillReceiveProps(nextProps) {
        var arr = [] , len = this.props.listlength;
        for(var i=0;i<len;i=i+4){
          arr.push(i);
        }
        this.setState({"count":arr})
    }
    
    render () {
        return (
            <div className="btnbar row">
                <div>
                    {this.state.count.map( (e,index) =>{
                       return <span className="mybtn" key={index}>{index+1}</span>
                    })}
                </div>
            </div>
        )
    }
}

export default Page