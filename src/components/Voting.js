import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

import Winner from './Winner';
import Vote from './Vote';

export class Voting extends PureComponent{
 
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

function mapStateToProps (state) {
  return {
    pair: state.getIn(['vote', 'pair']),
    winner: state.get('winner'),
    hasVoted: state.get('hasVoted')
  };
}

export const VotingContainer = connect(mapStateToProps)(Voting);
