import React from 'react';
import ReactDOM from 'react-dom';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag as scry
} from 'react-addons-test-utils';
import {expect} from 'chai';

import Voting from '../src/voting';

describe('Voting', ()=> {
  it('renders a pair of buttons', ()=> {
    const component = renderIntoDocument(
    <Voting pair={['Trainspotting', '28 Days Later']}/>)
    const buttons = scry(component, 'button');
    
    expect(buttons.length).to.equal(2);
    expect(buttons[0].textContent).to.equal('Trainspotting');
    expect(buttons[1].textContent).to.equal('28 Days Later');

  });
  
    
})