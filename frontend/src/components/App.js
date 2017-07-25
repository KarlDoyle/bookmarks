import React, { Component } from 'react';
import Header from './Header';
import Alert from './Alert';
export default class App extends Component {
  render(props) {
    return (
      <div className="container">
        <Alert text={this.props.alert} />
        <Header {...this.props} />
        {this.props.isAuthenticated ? this.props.children : null }
      </div>
    );
  }
}