import React from 'react';
import ReactDOM from 'react-dom';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag as scry,
  Simulate
} from 'react-addons-test-utils';
import {List} from 'immutable';
import {expect} from 'chai';

import {Voting} from '../src/components/Voting';

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
  
  it('renders as a pure component', ()=> {
    const pair = ['Trainspotting', '28 Days Later'];
    const container = document.createElement('div');
    let component = ReactDOM.render(
      <Voting pair={pair} />,
      container
    );
    
    let firstButton = scry(component, 'button')[0];
    expect(firstButton.textContent).to.equal('Trainspotting');
    
    pair[0] = 'Sunshine';
    component = ReactDOM.render(
      <Voting pair={pair} />,
      container
    );
    
    firstButton = scry(component, 'button')[0];
    expect(firstButton.textContent).to.equal('Trainspotting');
  });
  
  it('updates DOM when props change', ()=> {
    const pair = List.of('Trainspotting', 'Sunshine');
    const container = document.createElement('div');
    let component = ReactDOM.render(
      <Voting pair={pair} />,
      container);
    let firstButton = scry(component, 'button')[0];
    
    expect(firstButton.textContent).to.equal('Trainspotting');
    
    const newPair = pair.set(0, '28 Days Later');
    component = ReactDOM.render(
      <Voting pair={newPair} />,
      container);
    firstButton = scry(component, 'button')[0];
    
    expect(firstButton.textContent).to.equal('28 Days Later');

  })
})