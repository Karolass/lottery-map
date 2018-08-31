import React, { Component } from 'react'

class HeaderItem extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div
        className={`header-item ${this.props.active ? 'active' : 'false'} ${this.props.color}`}
        onClick={this.props.onClick}
      >
        {this.props.name}
      </div>
    )
  }
}

export default HeaderItem
