import React, {Component} from 'react';

class Vote extends Component{
 getPair (){
    return this.props.pair || [];
 }
 isDisabled () {
    return this.props.hasVoted !== undefined;
 }
 hasVotedFor (entry) {
    return this.props.hasVoted === entry
 }
  render (){
     return <div>
      {this.getPair().map(entry=>{
            return<button 
            disabled={this.isDisabled()}
            onClick={()=>this.props.vote(entry)}
            key={entry}>
             <h1>{entry}</h1>
            {this.hasVotedFor(entry)?
              <div className="label">voted</div>:
              null}

           </button>;
        })}
      </div>
  
  }
}

export default Vote;