import React, { Component } from 'react';
import botaoExtra from './botaoExtra';

const grupoBotoes = () => {
    const lista = [1,4,235,8]

    return(
        <>
            {lista.map(item => <button>{item}</button>)}
        </>
    );
}

export default grupoBotoes;