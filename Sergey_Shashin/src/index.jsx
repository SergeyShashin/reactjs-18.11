import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { MessageField } from 'components/MessageField';


class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <MessageField />
      </div>
    )
  }

}

ReactDom.render(
  <App />,
  document.getElementById('root'),
);