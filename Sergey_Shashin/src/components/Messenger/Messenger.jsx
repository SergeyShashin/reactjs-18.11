import './messenger.scss';
import React, { Component } from 'react';
import { MessagesField } from 'components/MessagesField';
import { ChatsField } from 'components/ChatsField';
import { MessageInput } from 'components/MessageInput';

export class Messenger extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages:
        [
          {
            author: 'user',
            text: 'привет'
          }
        ],

      chats: [{       
        nameChat: 'Реакт',
      }]

    }
    this.handleSend = this.handleSend.bind(this);
  }

  handleSend(m) {
    this.setState({
      messages: this.state.messages.concat([{ author: m.author, text: m.text }])
    })
  }

  handleAddChat=(ch)=>{
    this.setState({
      chats: this.state.chats.concat([{ nameChat: ch.nameChat }])
    })
  }



  render() {

    return (
      <div className="messenger">
        <div className="chatsField-messagesField">
          <ChatsField chats={this.state.chats} handleChat={this.handleAddChat}/>
          <MessagesField messages={this.state.messages} />
        </div>
        <MessageInput onSend={this.handleSend} />
      </div>
    )
  }
}