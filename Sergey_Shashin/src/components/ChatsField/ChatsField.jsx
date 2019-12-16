import './chatsField.scss';
import React, { Component } from 'react';

export class ChatsField extends Component {

  constructor(props) {
    super(props);

  }

  render() {

    return (
      <div className="chatsField">
        <button>Добавить чат</button>
      </div>
    )
  }
}