import './messenger.scss';
import React, { Component } from 'react';
import { MessagesField } from 'components/MessagesField';
import { ChatsField } from 'components/ChatsField';

export class Messenger extends Component {
  constructor(props) {
    super(props)
    this.state={
      messages: ['author: user text: привет'],
    }
  }

  render() {
    
    return (
      <div className="messenger">
        <div className="chatsField-messagesField">
          <ChatsField />
          <MessagesField messages={this.state.messages} />
        </div>
      </div>
    )
  }
}