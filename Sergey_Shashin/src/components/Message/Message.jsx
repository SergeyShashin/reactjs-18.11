import React, { Component } from 'react';

export class Message extends Component {
  constructor(props) {
    super(props);

  }

  render() {

    return (
      <div className={this.props.className}>
        {this.props.author} {this.props.message}
      </div>
    )

  }
}

