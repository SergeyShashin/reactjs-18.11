import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Layout } from './components/Layout';
import { BrowserRouter } from 'react-router-dom';


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
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);