import {Map} from 'immutable';

function setState(state, action) {
  return state.merge(action.state);
}

const reducer = (state = Map(), action)=> {
  
  switch(action.type){
    case 'SET_STATE':
      return setState(state, action);
  }
  
  return state;
}

export default reducer;