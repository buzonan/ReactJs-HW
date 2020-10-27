import React, { Component } from 'react';
import CounterContainer from '../containers/CounterContainer';

class CounterGroup extends Component {
    constructor(props) {
        super(props);
        
        this.initArray = this.initArray.bind(this);
    }
    
    initArray(size){
        const number = size.length > 0 &&  parseInt(size) > 0 ? parseInt(size) : 0;
        return Array.from(Array(number).keys());
    }

    render() {
        const size = this.props.size;
        const counterSizeArray = this.initArray(size);
        const counterArray = counterSizeArray.map((value) => (
            <CounterContainer />   
        ));
        return (
            <div>
                { counterArray }
            </div>
        );
    }
}

export default CounterGroup;