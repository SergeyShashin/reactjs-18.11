import React, { Component } from 'react';
import { Message } from 'components/Message';

export class MessageField extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Message />
      </div>
    )
  }
}