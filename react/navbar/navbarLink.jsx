import React from 'react';

var NavBarLink = React.createClass({
    render: function() {
        
        return (
            <a href={this.props.url} > {this.props.text} </a>
        );
    }
});

export default NavBarLink;