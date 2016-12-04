/**
 * Created by swati on 3/8/16.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App.jsx'
import Home from './Components/home';
import Login from './Components/login';


ReactDOM.render(
    <div>
        <Router history = {browserHistory}>
            <Route path = "/" component = {App}>
                <IndexRoute component = {Home} />
                <Route path = "/home" component = {Home} />
                <Route path = "/login" component = {Login} />
            </Route>
        </Router>

    </div>, document.getElementById('nav'));