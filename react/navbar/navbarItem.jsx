import React from 'react';
import NavBarLink from './navbarLink.jsx';
import NavBar from './navbar.jsx'

var NavBarItem = React.createClass({
    generateLink: function(items){
        //Right now we don't need our class but what if we wanted to change the text, add an arrow or something?
        //Single responsibility principles tell us that it our "Item" should not handle this.
        console.log("NavbarLink#url", items.url);
        return <NavBarLink  url={items.url} text={items.text} />
    },
    generateSubmenu: function(items){
        //We generate a simple Navbar (the parent).
        //Spoilers: it takes items as its argument.
        return <NavBar key={ "dskdjklsjl" } items={items.submenu} />
    },
    generateContent: function(items){
        var content = [this.generateLink(items)];
        if(items.submenu){
            //If there is a submenu in our data for this item
            //We add a generated Submenu to our content
            content.push(this.generateSubmenu(items));
        }
        return content;
    },
    render: function() {
        var items = this.props;
        var content = this.generateContent(items);
        console.log("NavbarItem#Content", content);
        return (
            <li>
                {content}
            </li>
        );
    }
});

export default NavBarItem;