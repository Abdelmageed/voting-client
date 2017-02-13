import React from 'react';
import ReactDOM from 'react-dom';
import {
  renderIntoDocument as render,
  scryRenderedDOMComponentsWithClass as scry,
  Simulate
} from 'react-addons-test-utils';
import {List, Map} from 'immutable';
import {expect} from 'chai';

import Results from '../src/components/Results';

describe('Results', ()=> {
  it('renders entries with vote count or zero', ()=> {
    const pair = List.of('Trainspotting', '28 Days Later');
    const tally = Map({'Trainspotting': 1}); 
    const results = render(<Results {...{pair, tally}}/>);
    
    const voteCounts = scry(results, 'vote-count');
    expect(voteCounts[0].textContent).to.contain('1');
    expect(voteCounts[1].textContent).to.contain('0');
    
    const entries = scry(results, 'entry');
    expect(entries[0].textContent).to.contain('Trainspotting');
    expect(entries[1].textContent).to.contain('28 Days Later');


  })
  
  it('invokes the next callback when the next button is clicked', ()=> {
    let nextInvoked = false;
    const next = () => {nextInvoked = true};
    
    const pair = List.of('Trainspotting', '28 Days Later');
    const tally = Map({'Trainspotting': 1}); 
    const results = render(<Results {...{pair, tally, next}}/>);
    
    const nextButton = scry(results, 'next-button')[0];
    Simulate.click(nextButton);
    
    expect(nextInvoked).to.be.true;
  });
  
  it('renders a winner when there is one', ()=> {
    const pair = List.of('Trainspotting', '28 Days Later');
    const tally = Map({'Trainspotting': 1});
    const winner = 'Trainspotting';
    const results = render(<Results {...{pair, tally, winner}}/>);
    
    const winnerElement = ReactDOM.findDOMNode(results.refs.winner);
    expect(winnerElement).to.be.ok;
    expect(winnerElement.textContent).to.contain('Trainspotting');
  });
});