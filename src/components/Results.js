import React, {PureComponent} from 'react';

import Winner from './Winner';
import Tally from './Tally';

class Results extends PureComponent{
  
  
  render() {
    return (
      this.props.winner?
       <Winner ref="winner" winner={this.props.winner}/>:
        <Tally {...this.props}/>
    );
  }
}

export default Results;