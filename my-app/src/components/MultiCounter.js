import React, { Component } from 'react';
import CounterGroup from './CounterGroup';
import CounterSizeGenerator from './CounterSizeGenerator';
import CounterGroupSum from './CounterGroupSum';

class MultiCounter extends Component {
    constructor(props) {
        super(props);
        
        this.onGenerate = this.onGenerate.bind(this);
        this.onCalculateTotal = this.onCalculateTotal.bind(this);

        this.state = {
            size: 0,
            total: 0
        };
    }

    onGenerate(size){
        this.setState({size});
    }

    onCalculateTotal = (counterValue) => {
        this.setState((prevState) => ({total: prevState.total + counterValue}));
    }
    
    render() {
        return (
            <div>
                <fieldset>
                <CounterSizeGenerator onGenerate={this.onGenerate}/>
                <CounterGroupSum total={this.state.total}/>
                </fieldset>
                <fieldset>
                <CounterGroup size={this.state.size} total={this.onCalculateTotal}/>
                </fieldset>
            </div>
        );
    }
}

export default MultiCounter;