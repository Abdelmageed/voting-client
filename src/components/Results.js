import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

import Winner from './Winner';
import Tally from './Tally';

export class Results extends PureComponent{
  
  render() {
    return (
      this.props.winner?
       <Winner ref="winner" winner={this.props.winner}/>:
        <Tally {...this.props}/>
    );
  }
}

function mapStateToProps(state){
  return {
    pair: state.getIn(['vote', 'pair']),
    tally: state.getIn(['vote', 'tally']),
    winner: state.get('winner')
  }
}

export const ResultsContainer = connect(mapStateToProps, actions)(Results);
