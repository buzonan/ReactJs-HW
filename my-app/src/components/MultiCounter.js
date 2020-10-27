import React, { Component } from 'react';
import CounterSizeGeneratorContainer from '../containers/CounterSizeGeneratorContainer';
import CounterGroupSum from './CounterGroupSum';
import CounterGroupContainer from '../containers/CounterGroupContainer';

class MultiCounter extends Component {
    constructor(props) {
        super(props);
        
        this.onGenerateCounters = this.onGenerateCounters.bind(this);
        this.onCalculateTotal = this.onCalculateTotal.bind(this);

        this.state = {
            size: 0,
            total: 0
        };
    }

    onGenerateCounters(size){
        this.setState({size});
    }

    onCalculateTotal = (counterValue) => {
        this.setState((prevState) => ({total: prevState.total + counterValue}));
    }
    
    render() {
        return (
            <div>
                <fieldset>
                <CounterSizeGeneratorContainer/>
                <CounterGroupSum total={this.state.total}/>
                </fieldset>
                <fieldset>
                <CounterGroupContainer/>
                </fieldset>
            </div>
        );
    }
}

export default MultiCounter;