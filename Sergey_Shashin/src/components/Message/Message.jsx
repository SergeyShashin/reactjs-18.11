import React, { Component } from 'react';

export class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      messages: [],
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {
    this.setState({
      messages: this.state.messages.concat({ message: this.state.text, author: 'admin' })
    });
  }

  handleChange(e) {
    this.setState({
      text: e.target.value
    })
  }

  componentDidUpdate() {
    
    if (this.state.messages.length % 2 !== 0) {      
      let author= this.state.messages[this.state.messages.length-1].author;
     
      this.setState({
        messages: this.state.messages.concat({ message: `${author}, Ваше сообщение получено.`, author: 'robot' })
      });
    }

  }

  render() {
    return (
      <div>
        <input value={this.state.text} onChange={this.handleChange} />
        <button onClick={this.handleClick}>Отправить</button>
        {this.state.messages.map((e, idx) => (<div key={idx}>{e.author}: {e.message}</div>))}
      </div>
    )
  }
}

