import React, { Component } from 'react'

class RowData extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {

    return (
      <td>
        {
          this.props.content
          &&
          <span className={this.props.color}>
            {this.props.content}
          </span>
        }
      </td>
    )
  }
}

export default RowData
