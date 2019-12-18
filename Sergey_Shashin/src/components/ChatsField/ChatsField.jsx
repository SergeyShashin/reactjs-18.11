import './chatsField.scss';
import React, { Component } from 'react';

export class ChatsField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nameChat: '',
    }
    this.handleAddChat = this.handleAddChat.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);

  }

  handleInputChange = (e) => {
    this.setState({
      nameChat: e.target.value
    })
  }

  handleAddChat() {
    const { handleChat } = this.props;

    if (typeof handleChat === 'function') {
      handleChat(this.state);
      this.setState({ nameChat: '' });
    }
  }

  handleKeyDown(e) {
    if (e.keyCode === 13) {
      this.handleAddChat();
    }
  }

  render() {

    return (
      <div className="chatsField">
        {this.props.chats.map(
          (chat, idx) => <p key={idx}>{chat.nameChat}</p>
        )}
        <input placeholder='название чата' value={this.state.nameChat} onChange={this.handleInputChange} onKeyDown={this.handleKeyDown} />
        <button onClick={this.handleAddChat}>Добавить чат</button>
      </div>
    )
  }

}
