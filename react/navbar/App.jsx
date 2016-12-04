import React from 'react';
import NavbarNew from './navbarBootstrap';
import Home from './home';

class App extends React.Component{
    
    render()  {
       var self =this;
      return(
          <div>
          <NavbarNew />
              {this.props.children}
        </div>
      )
    }
};

export default App;