import React from 'react';
import NavBarItem from './navbarItem.jsx';

var NavBar = React.createClass({
    generateItem: function(item, index){
        return <NavBarItem key={index} text={item.text} url={item.url} submenu={item.submenu} />
    },
    render: function() {
        var items = this.props.items.map(this.generateItem);
        console.log(items);
        return (
            <ul className="menu">
                {items}
            </ul>
        );
    }
});
export default NavBar;