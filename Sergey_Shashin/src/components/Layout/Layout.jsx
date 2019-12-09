import './layout.scss';
import React, { Component } from 'react';
import { Header } from 'components/Header';
import { ChatList } from 'components/ChatList';
import { MessageField } from 'components/MessageField';


export class Layout extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Header />
        <div className="chatList-messageField">
          <ChatList />
          <MessageField />
        </div>
      </div>)
  }
}