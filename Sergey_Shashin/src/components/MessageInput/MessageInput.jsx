import './messageInput.scss';
import React, { Component } from 'react';


export class MessageInput extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="messageInput">
        <input className="author" type="text" name="author" placeholder="Автор" />
        <input className="text" type="text" name="text" placeholder="Текст" />
        <button>Отправить</button>
      </div>
    )
  }
}