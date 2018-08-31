import React, { Component } from 'react'

import HeadItem from './HeaderItem' 
import { gamePlayTypeList, mapTypeList } from './HeaderList' 

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      mapItems: []
    }

    this.state.items = gamePlayTypeList(props.gameType, props.lang)
    this.state.mapItems = mapTypeList(this.state.items[0].mapItemIndex, props.lang)
  }

  init = (gameType) => {
    const items = gamePlayTypeList(gameType, this.props.lang)
    items.map((v, key) => {
      if (key === 0) v.active = true
      else v.active = false
      return v
    })

    const mapItems = mapTypeList(items[0].mapItemIndex, this.props.lang)
    mapItems.map((v, key) => {
      if (key === 0) v.active = true
      else v.active = false
      return v
    })

    this.setState({ items, mapItems })
  }

  onItemClick = (itemType, index) => {
    const items = itemType === 0 ? this.state.items.slice() : this.state.mapItems.slice()
    items.map((v, key) => {
      if (key === index) v.active = true
      else v.active = false
      return v
    })

    if (itemType === 0) {
      const mapItems = mapTypeList(items[index].mapItemIndex, this.props.lang)
      // reinit
      mapItems.map((v, key) => {
        if (key === 0) v.active = true
        else v.active = false
        return v
      })
      this.setState({ items, mapItems })
      this.props.onGamePlayChange(index)
    } else {
      this.setState({ mapItems: items })
      this.props.onGamePlayMapChange(index)
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.gameType !== nextProps.gameType) {
      this.init(nextProps.gameType)
    }
  }

  render() {
    return (
      <div className="game-play">
        <div className="header">
          {
            this.state.items.map((v, key) =>
              <HeadItem
                key={key}
                active={v.active}
                name={v.name}
                onClick={() => this.onItemClick(0, key)}
              />
            )
          }
        </div>
        <div className="header">
          {
            this.state.mapItems.map((v, key) =>
              <HeadItem
                key={key}
                active={v.active}
                name={v.name}
                onClick={() => this.onItemClick(1, key)}
              />
            )
          }
        </div>
      </div>
    )
  }
}

export default Header
