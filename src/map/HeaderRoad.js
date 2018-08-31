import React, { Component } from 'react'

import HeadItem from './HeaderItem' 
import { roadTypeList } from './HeaderList' 

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.state.items = roadTypeList(props.lang)
  }

  onItemClick = (index) => {
    const items = this.state.items.slice()
    items.map((v, key) => {
      if (key === index) v.active = true
      else v.active = false
      return v
    })
    this.setState({ items })

    this.props.onClick(index)
  }

  render() {
    return (
      <div className="header road">
        {
          this.state.items.map((v, key) =>
            <HeadItem
              key={key}
              active={v.active}
              color="green"
              name={v.name}
              onClick={() => this.onItemClick(key)}
            />
          )
        }
      </div>
    )
  }
}

export default Header
