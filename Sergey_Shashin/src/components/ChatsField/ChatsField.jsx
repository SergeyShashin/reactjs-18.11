import './chatsField.scss';
import React, { Component } from 'react';

export class ChatsField extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="chatsField">
        <p><span>IconChat </span> <span> NameChat</span> </p>
        <button>Добавить чат</button>        
      </div>
    )
  }
}