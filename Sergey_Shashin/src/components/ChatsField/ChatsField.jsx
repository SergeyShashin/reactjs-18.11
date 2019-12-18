import './chatsField.scss';
import React, { Component } from 'react';
import PropTypes from "prop-types";


export class ChatsField extends Component {
  constructor(props) {
    super(props);
   
 
  }
 

  render() {

    return (
      <div className="chatsField">
        <input placeholder='название чата' />
        <button onClick={this.handleAddChat}>Добавить чат</button>
      </div>
    )
  }

}
