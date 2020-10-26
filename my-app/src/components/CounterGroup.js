import React, { Component } from 'react';
import Counter from '../components/Counter';

class CounterGroup extends Component {
    constructor(props) {
        super(props);
        
        this.initArray = this.initArray.bind(this);
    }
    
    initArray(size){
        const number = size.length > 0 ? parseInt(size) : 0;
        return Array.from(Array(number).keys());
    }

    render() {
        const size = this.props.size;
        // const {size} = this.props;
        const counterSizeArray = this.initArray(size);
        return (
            <div>
                { counterSizeArray.map((value) => (
                    <Counter key={value} />   
                ))
         }
            </div>
        );
    }
}

export default CounterGroup;