import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Voting from './voting';
import Results from './results';
import {Router, Route, hashHistory} from 'react-router';
import './index.css';

const routes = 
<Route component={App}>
  <Route path="/" component={Voting} />
  <Route path="/results" component={Results} />
</Route>;

ReactDOM.render(
  <Router history={hashHistory}>{routes}</Router>,
  document.getElementById('root')
);
