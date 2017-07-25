import React, { Component } from 'react';


class Account extends Component {
  componentWillMount() {
    this.props.loadAccount()
  }
  render(props) {
    return (
      this.props.data ?
      <div>
        <h4>{this.props.data.first_name + ' ' + this.props.data.last_name}</h4>
        <img src={this.props.data.avatar} />
        <em>{this.props.data.email}</em>
      </div>
      : null
    )
  }
}

export default Account;