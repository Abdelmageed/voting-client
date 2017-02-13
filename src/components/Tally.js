import React, {PureComponent} from 'react';

class Tally extends PureComponent{
  
  getPair() {
    return this.props.pair || [];
  }
  
  getVotes(entry) {
    return (this.props.tally && this.props.tally.has(entry))?
      this.props.tally.get(entry) : 0;
  }
  
  render() {
    return (<div className="results">
       {
        this.getPair().map(entry=>{
          return (<div className="entry" key={entry}>
            <h1>{entry}</h1>
            <h3 className="vote-count">{this.getVotes(entry)}</h3>
          </div>)  
        })
      }
        <button className="next-button" onClick={()=>{this.props.next()}}>Next</button>
      </div>);
  }
}

export default Tally;