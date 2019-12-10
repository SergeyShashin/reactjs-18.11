import React, { Component } from 'react';
import { Message } from 'components/Message';
import {Button} from '@material-ui/core';
import {Input} from '@material-ui/core';

export class MessageField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      messages: [],
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);    
    
  }

  handleClick() {
    this.setState({
      messages: this.state.messages.concat({ message: this.state.text, author: 'user' }),
      text: ''
    });    
  }

  handleKeyDown(e){
    if(event.ctrlKey && event.keyCode === 13) {
      this.handleClick();
    };    
  
  }

  handleChange(e) {
    this.setState({
      text: e.target.value
    })
  }

  componentDidUpdate() {
    if (this.state.messages.length % 2 !== 0) {
      let author = this.state.messages[this.state.messages.length - 1].author;

      this.setState({
        messages: this.state.messages.concat({ message: `${author}, Ваше сообщение получено.`, author: 'robot' })
      });
    }
  }

  render() {

    return (
      <div className='messageField'>
        <div className='field'>
          {
            this.state.messages.map((e, idx) => (
              e.author !== 'robot'
                ? <Message className='author' key={idx} author={e.author + ':'} message={e.message} />
                : <Message className='robot' key={idx} author={e.author + ':'} message={e.message} />
            ))
          }
        </div>
        <div className="message">
          <Input className = "inputText" value={this.state.text} onChange={this.handleChange} onKeyDown={this.handleKeyDown}/>
          <Button onClick={this.handleClick}>Отправить</Button>
        </div>
      </div>
    )
  }
}