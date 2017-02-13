import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {VotingContainer} from './components/Voting';
import {ResultsContainer} from './components/Results';
import {Provider} from 'react-redux';
import {Router, Route, hashHistory} from 'react-router';
import {createStore} from 'redux';
import reducer from './reducer';
import io from 'socket.io-client';
import './index.css';



const store = createStore(reducer);
const socket = io(`${location.protocol}//${location.hostname}:8001`);
socket.on('state', state=>{
  store.dispatch({type:'SET_STATE', state})
});
const routes = 
<Route component={App}>
  <Route path="/" component={VotingContainer} />
  <Route path="/results" component={ResultsContainer} />
</Route>;

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('root')
);
