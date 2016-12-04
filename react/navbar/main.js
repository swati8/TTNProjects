import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import App from './App.jsx'
import Home from './home';
import shirts from './shirts';


ReactDOM.render(
    <div>
        <Router history = {browserHistory}>
            <Route path = "/" component = {App}>
                <IndexRoute component = {Home} />
                <Route path = "/home" component = {Home} />
                <Route path = "/shirts" component = {shirts} />
            </Route>
        </Router>

    </div>, document.getElementById('nav'));