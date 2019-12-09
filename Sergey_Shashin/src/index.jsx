import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Layout } from './components/Layout';


class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Layout />
    )
  }

}

ReactDom.render(
  <App />,
  document.getElementById('root'),
);