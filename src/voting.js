import React, {PureComponent} from 'react';

import Winner from './winner';
import Vote from './vote';

class Voting extends PureComponent{
 
 
 
  render (){
    return (
      <div className="voting">
        {this.props.winner?
          <Winner ref="winner" winner={this.props.winner}/>: 
          <Vote {...this.props} />
        }
        
      </div>
    )
  }
}

export default Voting;