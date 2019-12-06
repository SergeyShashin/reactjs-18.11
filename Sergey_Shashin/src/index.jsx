import React, { Component } from 'react';
import ReactDom from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: [],
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {

    this.setState({
      text: this.state.text.concat('Нормально')
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Отправить</button>
        {this.state.text.map(e => (<div>{e}</div>))}
      </div>
    )
  }

}


ReactDom.render(
  <App />,
  document.getElementById('root'),
);