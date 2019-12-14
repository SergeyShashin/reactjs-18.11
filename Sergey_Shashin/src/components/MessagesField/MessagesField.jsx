import './messagesField.scss';
import React, { Component } from 'react';
import { MessageInput } from 'components/MessageInput';
import { Message } from 'components/Message';

export class MessagesField extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="messagesField">
        <div className="field">          
          <Message messages= {this.props.messages}/>
        </div>

        <MessageInput />
      </div>
    )
  }

}