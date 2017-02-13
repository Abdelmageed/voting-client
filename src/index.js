import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Voting from './components/Voting';
import Results from './components/Results';
import {Provider} from 'react-redux';
import {Router, Route, hashHistory} from 'react-router';
import {createStore} from 'redux';
import reducer from './reducer';
import './index.css';

const store = createStore(reducer);
store.dispatch({
  type: 'SET_STATE',
  state: {
    vote: {
      pair: ['Trainspotting', 'Sunshine'],
      tally: {'Trainspotting': 1}
    }
  }
})
const routes = 
<Route component={App}>
  <Route path="/" component={Voting} />
  <Route path="/results" component={Results} />
</Route>;

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('root')
);
