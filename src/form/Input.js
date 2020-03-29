import React, {Component} from 'react';
import './form.css'

class Input extends Component {
    constructor() {
        super();
        this.userInputRef = React.createRef();
        this.state = {
            userText: "nothing.",
            isMultiTextButtonClicked: false,
            userList: []
        }
    }

    onChangeUserInput = (event) => {
        console.log("onChangeUserInput called>>>>>>>");
        console.log("this.userInputRef.current: ", this.userInputRef.current);
        console.log("event.target: ", event.target);
        this.setState({userText: event.target.value})
    }

    onMultiClick = (event) => {
        console.log("onMultiClick called>>>>>>>");
        console.log("event.target::::::", event.target);
        console.log(">>>>>>onMultiClick before state:::::::", this.state);
        this.setState({isMultiTextButtonClicked: true})
    }

    addInListHandler = () => {
        let list = this.state.userList;
        this
            .state
            .userList
            .push(this.state.userText)
        this.setState({userList: list})
    }

    render() {
        console.log("render called>>>>>>>>", this.state);
        const {isMultiTextButtonClicked, userText} = this.state
        let typingText = isMultiTextButtonClicked
            ? userText + " " + userText
            : userText
        return (
            <div className='form'>
                <input type="text" ref={this.userInputRef} onChange={this.onChangeUserInput}/>
                <button onClick={this.onMultiClick}>print 2 times</button>
                <button onClick={this.addInListHandler}>add in list</button>
                <div>user is typing.... {typingText}</div>
                <ul>
                    list: {this
                        .state
                        .userList
                        .map((user, index) => {
                            return <li key={index}>{user}</li>
                        })}
                </ul>
            </div>
        );
    }
}

export default Input;