import React from 'react';
import {render} from 'react-dom';
import App from './component/app';
import Router from 'react-router';
import {routes} from './route';

render(
    <Router routes={routes} />,
    document.getElementById("app")
)