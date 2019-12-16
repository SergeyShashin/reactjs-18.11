import './messagesField.scss';
import React, { Component } from 'react';
import { Message } from 'components/Message';

export class MessagesField extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { messages } = this.props;

    return (
      <div className="messagesField">
        {messages.map(
          (message, idx) => <Message key={idx} author={message.author} text= {message.text} />
        )}
      </div>
    )
  }

}