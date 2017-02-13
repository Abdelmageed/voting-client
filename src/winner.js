import React, {PureComponent} from 'react';

class Winner extends PureComponent{
  render(){
    return <div>Winner is {this.props.winner}</div>
  }
}

export default Winner;