import React, { Component } from 'react';


class Counter extends Component {
    constructor(props) {
        super(props);
        
        this.onIncrease = this.onIncrease.bind(this);
        this.onDecrease = this.onDecrease.bind(this);

        this.state = {
            number: 0,
        }
    }

    componentWillUnmount(){
        this.props.total(0 - this.state.number);
    }
    
    onIncrease(){
        this.setState((prevState) => ({number: prevState.number + 1}), ()=>{ this.props.increaseTotal()});
    }

    onDecrease(){
        this.setState((prevState) => ({number: prevState.number - 1}), ()=>{this.props.total(-1)});
    }

    render() {
        return (
            <section>
                <input type="button" value="+" onClick={this.onIncrease}/>
                    <span>{this.state.number}</span>
                <input type="button" value="-" onClick={this.onDecrease}/>
            </section>
        );
    }
}

export default Counter;