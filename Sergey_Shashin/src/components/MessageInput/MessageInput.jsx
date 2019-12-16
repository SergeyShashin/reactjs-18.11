import './messageInput.scss';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class MessageInput extends Component {

  constructor(props) {
    super(props)
    this.state = {
      author: '',
      text: '',
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSend = this.handleSend.bind(this);
  }

  static propTypes = {
    onSend: PropTypes.func
  }

  handleInputChange(e) {
    let fieldName = e.target.name;

    this.setState({
      [fieldName]: e.target.value,
    })
  }

  handleSend() {
    const { onSend } = this.props;

    if (typeof onSend === 'function') {
      onSend(this.state);
      this.setState({ text: '', });
    }

  }

  render() {
    const { author, text } = this.state;
    return (
      <div className="messageInput">
        <input className="author" type="text" name="author" placeholder="Автор" value={author} onChange={this.handleInputChange} />
        <input className="text" type="text" name="text" placeholder="Текст" value={text} onChange={this.handleInputChange} />
        <button onClick={this.handleSend}>Отправить</button>
      </div>
    )
  }
}