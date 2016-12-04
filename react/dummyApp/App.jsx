import React from 'react';
import Navbar from './Components/navbar';

class App extends React.Component{

    render()  {
        return(
            <div>
                <Navbar />
                {this.props.children}
            </div>
        )
    }
};

export default App;