import {List, Map} from 'immutable';
import {expect} from 'chai';

import reducer from '../src/reducer';

describe('Reducer', ()=> {
  
  it('should merge in the incoming state on SET_STATE', ()=>{
    const action = {
      type: 'SET_STATE',
      state: Map({
        vote: Map({
          pair: List.of('Trainspotting', '28 Days Later'),
          tally: Map({Trainspotting: 1})
        })
      })
    };
    const state = Map({
      vote: Map()
    });
    const expectedNextState = Map({
        vote: Map({
          pair: List.of('Trainspotting', '28 Days Later'),
          tally: Map({Trainspotting: 1})
        })
      });
    
    expect(reducer(state, action)).to.equal(expectedNextState);
  });
  
  it('handles SET_STATE with plain JS', ()=> {
    const action = {
      type: 'SET_STATE',
      state: {
        vote: {
          pair: ['Trainspotting', '28 Days Later'],
          tally: {Trainspotting: 1}
        }
      }
    };
    const state = Map({
      vote: Map()
    });
    const expectedNextState = Map({
        vote: Map({
          pair: List.of('Trainspotting', '28 Days Later'),
          tally: Map({Trainspotting: 1})
        })
      });
    
    expect(reducer(state, action)).to.equal(expectedNextState);
  });
  
  it('does not break passing undefined state', ()=> {
    
    const action = {
      type: 'SET_STATE',
      state: Map({
        vote: Map({
          pair: List.of('Trainspotting', '28 Days Later'),
          tally: Map({Trainspotting: 1})
        })
      })
    };
    const state = undefined;
    const expectedNextState = Map({
        vote: Map({
          pair: List.of('Trainspotting', '28 Days Later'),
          tally: Map({Trainspotting: 1})
        })
      });
    
    expect(reducer(state, action)).to.equal(expectedNextState);
  })
});