import {Map, List, fromJS} from 'immutable';

function setState(state, newState) {
  return state.merge(newState);
}

function resetState(state, newState) {
  const hasVoted = state.get('hasVoted');
  return (newState.getIn(['vote', 'pair'], List()).includes(hasVoted))?
    state:
  state.remove('hasVoted');
}

function vote(state, entry) {
  const pair = state.getIn(['vote', 'pair']);
  
  return (pair && pair.includes(entry))?
    state.set('hasVoted', entry):
  state;
}

const reducer = (state = Map(), action)=> {
  
  switch(action.type){
    case 'SET_STATE':
      return setState(resetState(state, Map(fromJS(action.state))), action.state);
    case 'VOTE':
      return vote(state, action.entry);
    default:
      return state;
  }
  
}

export default reducer;