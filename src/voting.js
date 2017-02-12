import React, {Component} from 'react';

import Winner from './winner';
import Vote from './vote';

class Voting extends Component{
 
 
 
  render (){
    return (
      <div className="voting">
        {this.props.winner?
          <Winner winner={this.props.winner}/>: 
          <Vote {...this.props} />
        }
        
      </div>
    )
  }
}

export default Voting;