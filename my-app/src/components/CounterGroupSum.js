import React, { Component } from 'react';

class CounterGroupSum extends Component {
    render() {
        return (
            <div>
                The Sum of all counters is {this.props.sum}
            </div>
        );
    }
}

export default CounterGroupSum;