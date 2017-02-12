import React from 'react';
import ReactDOM from 'react-dom';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag as scry,
  Simulate
} from 'react-addons-test-utils';
import {expect} from 'chai';

import Voting from '../src/voting';

describe('Voting', ()=> {
  it('renders a pair of buttons', ()=> {
    const component = renderIntoDocument(
    <Voting pair={["Trainspotting", "28 Days Later"]}/>)
    const buttons = scry(component, 'button');
    
    expect(buttons.length).to.equal(2);
    expect(buttons[0].textContent).to.equal('Trainspotting');
    expect(buttons[1].textContent).to.equal('28 Days Later');

  });
  
  it('invokes a callback when a button is pressed', ()=> {
    let votedWith;
    const vote = entry => votedWith = entry;
    
    const component = renderIntoDocument(
      <Voting pair={['Trainspotting', '28 Days Later']}
      vote={vote}/>
    );
    const buttons = scry(component, 'button');
    
    Simulate.click(buttons[0]);
    
    expect(votedWith).to.equal('Trainspotting');
  });
  
  it('should disable the buttons on vote', ()=> {
    const component = renderIntoDocument(
      <Voting 
      pair={['Trainspotting', '28 Days Later']}
      hasVoted="Trainspotting"
      />
    );
    
    const buttons = scry(component, 'button');
    expect(buttons[0].hasAttribute('disabled')).to.equal.true;
    expect(buttons[1].hasAttribute('disabled')).to.equal.true;
  });
  
  it('should show voted label on voted entry', ()=> {
     const component = renderIntoDocument(
      <Voting 
      pair={['Trainspotting', '28 Days Later']}
      hasVoted="Trainspotting"
      />
    );
    
    const buttons = scry(component, 'button');
    expect(buttons[0].textContent).to.contain('voted');
  });
  
  it('should only show the winner with no buttons when a winner is given', ()=> {
     const component = renderIntoDocument(
      <Voting 
       winner="Trainspotting"
      />
    );
    
    const buttons = scry(component, 'button');
    expect(buttons.length).to.equal(0);
    
    const winner = ReactDOM.findDOMNode(component.refs.winner)
    expect(winner).to.be.ok;
    expect(winner.textContent).to.contain('Trainspotting');
  })
})