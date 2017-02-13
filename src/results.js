import React, {PureComponent} from 'react';

import Winner from './winner';
import Tally from './tally';

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