import 'babel-polyfill';
import React from 'react';
import {Router, browserHistory} from 'react-router';
import {render} from 'react-dom';
import routes from '../routes/routes';
import {Provider} from 'react-redux';
import store from './store/configure.store';
//import App from './components/App';
import {fetchCourse} from './actions/course.actions';

store.dispatch(fetchCourse());

render(
    <Provider store={store}>
        <Router routes={routes} history={browserHistory} />
    </Provider>,
    document.getElementById("app")
);
