import React, {Component} from 'react';
import {ReactComponent as MessengerIcon} from "../icons/messenger.svg";
import {Launcher} from 'react-chat-window';
import "../index.css";

class PopUpChat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messageList: []
        };
    }

    _onMessageWasSent(message) {
        this.setState({
            messageList: [...this.state.messageList, message]
        })
    }

    _sendMessage(text) {
        if (text.length > 0) {
            this.setState({
                messageList: [...this.state.messageList, {
                    author: 'them',
                    type: 'text',
                    data: { text }
                }]
            });
        }
    }

    render() {
        return (
            <div>
            <Launcher
                agentProfile={{
                    teamName: 'react-chat-window',
                    imageUrl: MessengerIcon,
                }}
                onMessageWasSent={this._onMessageWasSent.bind(this)}
                messageList={this.state.messageList}
                showEmoji
            />
        </div>
        );
    }
}

export default PopUpChat;
