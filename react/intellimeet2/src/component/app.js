
import React from 'react';
import Link from './link';
import Contact from "./contact";

export default class App extends React.Component{
    render() {
        return(
            <div>
                {this.props.children}
                </div>
        )
    }

}