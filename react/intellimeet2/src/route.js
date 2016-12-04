import React from 'react';
import {Route,IndexRoute} from 'react-router';
import App from './component/app';
import Contact from './component/contact';
import Home from './component/home';
import About from './component/about';

export default (
    <Route path = "/" component = {App}>
        <IndexRoute component = {Home} />
        <Route path = "/home" component = {Home} />
        <Route path = "/about" component = {About} />
        <Route path = "/contact" component = {Contact} />
    </Route>

)
