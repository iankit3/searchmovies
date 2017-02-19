import React, {Component} from 'react'

function getValueOfPropertyNameByRegex(o, r) {
var results = [];
  for (var k in o) {
    if (k.match(r)) {
      results.push(o[k])
    }
  }
  return results;
};

class Card extends Component {
    render () {
        var actors = [];
        var k = this.props.index
        actors = getValueOfPropertyNameByRegex(this.props,/actor+/);
        return (
            <div className="card">
                <div className="card-top head">
                    <div className="head-left">
                        <div className="img_div">
                            
                        </div>
                    </div>
                    <div className="head-right">
                        <span>
                           <div className="title-left">
                                <span className="mov-title">
                                 {this.props.movie_title}
                                </span>
                                <span> ({this.props.title_year})</span>
                           </div>
                          </span>
                        <span  className="title-right">
                           Country : {this.props.country}
                        </span> 
                        <table>
                        <tbody>
                            <tr>
                              <td>Language</td>
                              <td> {' '}:{' '} </td> 
                              <td style={{paddingLeft:"4px"}}>
                                {this.props.language}
                               </td>
                            </tr>
                            <tr>
                               <td>Director</td>
                               <td> {' '}:{' '}</td>
                               <td style={{paddingLeft:"4px"}}>
                                  { this.props.director_name}
                               </td>
                             </tr>
                            <tr>
                             <td>Actors</td>
                             <td> {' '}:{' '}</td> 
                             <td style={{paddingLeft:"4px"}}>
                               {actors.map( (e,index) => {
                                  return <span key={index}>{ e }{", "}</span>
                               })}
                               </td> 
                             </tr>
                        </tbody>
                        </table>
                    </div>
                </div>
                <div className="card-bottom" style={{whiteSpace:"nowrap"}}>
                   <span className="btom-half" style={{width:"70%"}}>
                      Genres: {this.props.plot_keywords} </span>
                   <span className="btom-half" style={{float: "right"}}>
                      Budget : {this.props.budget} </span>     
                </div>     
            </div>
        )
    }
}
     
export default Card