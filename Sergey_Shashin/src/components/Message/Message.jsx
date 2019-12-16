import './message.scss';
import React, { Component } from 'react';

export class Message extends Component {
  constructor(props) {
    super(props)
    console.log(this.props.message);

  }

  render() {
    return (
      <div className="message" style={{ alignSelf: this.props.author === 'бот' ? 'flex-end' : 'flex-start' }}>
        {this.props.author + ': ' + this.props.text}
      </div>
    )
  }
}