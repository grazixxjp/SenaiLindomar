import React, { Component } from 'react';

class Titulo extends Component {
    state = { 
        contador: 0
     } 

    teste() {
        this.setState({contador: 0})
     }
    render() { 
        return (
            <><h1 className='verde'>OK</h1></>
        );
    }
}
export default Titulo;