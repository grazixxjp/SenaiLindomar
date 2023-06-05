import React, { Component } from 'react';

class botaoExtra extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <button>
                {this.props.titulo}
            </button>
            </>
        );
    }
}
 
export default botaoExtra;