import React, {Component} from 'react';

class Counter extends Component {
    constructor(props) {
        super(); // mandatory
        this.state = {
            counterValue: 5
        }
    }

    onClickHandler = () => {
        console.log("button clicked......");
        const {incAmount} = this.props;
        this.setState({
            counterValue: incAmount - this.state.counterValue
        })
    }

    render() {
        const {incAmount} = this.props;
        console.log("this in render::::::", this.state);
        return (
            <div>
                <h2>Counter value : {this.state.counterValue}</h2>
                <button onClick={this.onClickHandler}>Counter - {incAmount}</button>
            </div>
        )
    }
}

export default Counter;
