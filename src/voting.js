import React, {Component} from 'react';

class Voting extends Component{
  render (){
    return (
      <div className="voting">
        {this.props.pair.map(entry=>{
         return <button key={entry}><h1>{entry}</h1></button>
        })}
      </div>
    )
  }
}

export default Voting;