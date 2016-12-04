import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

class App extends React.Component {


    constructor(props) {
        super(props);
        this.state = {"home":"home","about":"about","contact":"contact"}
        this.navigate = this.navigate.bind(this);
    };

    navigate(val) {
        console.log('sdddddddddd');
        console.log(val);

        browserHistory.push('about');
    }

    render() {
        return (
            <div>
            <ul>
            <li value={this.state.home} onClick={this.navigate}>Home</li>
            <li value={this.state.about} onClick={this.navigate}>About</li>
            <li value={this.state.contact} onClick={this.navigate}>Contact</li>
            </ul>
            {this.props.children}
    </div>
    )
    }
}

export default App;

class Home extends React.Component {
    render() {
        return (
            <div>
            <h1>Home...</h1>
            </div>
    )
    }
}

export default Home;

class About extends React.Component {
    render() {
        return (
            <div>
            <h1>About...</h1>
            </div>
    )
    }
}

export default About;

class Contact extends React.Component {
    render() {
        return (
            <div>
            <h1>Contact...</h1>
            </div>
    )
    }
}

export default Contact;

ReactDOM.render((
    <Router history = {browserHistory}>
    <Route path = "/" component = {App}>
    <IndexRoute component = {Home} />
    <Route path = "home" component = {Home} />
    <Route path = "about" component = {About} />
    <Route path = "contact" component = {Contact} />
    </Route>
    </Router>

), document.getElementById('app'))
