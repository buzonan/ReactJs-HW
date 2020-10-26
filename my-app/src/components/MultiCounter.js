import React, { Component } from 'react';
import CounterGroup from './CounterGroup';
import CounterSizeGenerator from './CounterSizeGenerator';
import CounterGroupSum from './CounterGroupSum';

class MultiCounter extends Component {
    constructor(props) {
        super(props);
        
        this.onGenerate = this.onGenerate.bind(this);
        this.onSum = this.onSum.bind(this);

        this.state = {
            size: 0,
            sum: 0
        };
    }

    onGenerate(size){
        this.setState({size});
    }

    onSum = (counterValue) => {
        this.setState((prevState) => ({sum: prevState.sum + counterValue}));
    }


    
    render() {
        return (
            <div>
                <fieldset>
                <CounterSizeGenerator onGenerate={this.onGenerate}/>
                <CounterGroupSum sum={this.state.sum}/>
                </fieldset>
                <fieldset>
                <CounterGroup size={this.state.size} sum={this.onSum}/>
                </fieldset>
            </div>
        );
    }
}

export default MultiCounter;