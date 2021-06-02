// your Bomb code here!
import React, { Component } from 'react';

export default class Bomb extends Component {
    constructor(prop){
        super()
        this.state = {
            secondsLeft: prop.initialCount
        }
    }


    render(){
        const boom = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`
        return(
        <div>{boom}</div>
        )
    }

}