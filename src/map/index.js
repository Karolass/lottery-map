import React, { Component } from 'react'

import language from './Language'
import HeaderRoad from './HeaderRoad'
import HeaderGamePlay from './HeaderGamePlay'
import Table from './Table'
import './Map.css'

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lang: props.lang || 'zh-TW',
      roadType: 0,
      gamePlayType: 0,
      gamePlayMap: 0,
    }

    this.winNumbersShow = props.winNumbersShow || 30
    this.colCount = props.colCount || 25
    this.rowCount = props.rowCount || 6
  }

  onRoadTypeChange = (type) => {
    this.setState({ roadType: type })
  }

  onGamePlayChange = (type) => {
    this.setState({ gamePlayType: type, gamePlayMap: 0 })
  }

  onGamePlayMapChange = (type) => {
    this.setState({ gamePlayMap: type })
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.gameType !== nextProps.gameType) {
      this.setState({ gamePlayType: 0, gamePlayMap: 0 })
    }
  }

  render() {
    return (
      <div className="game-map">
        <p className="title">{language[this.state.lang].title}</p>
        <div className="container">
          <div className="ball">
            <div className="flex-box">
              <HeaderRoad
                lang={this.state.lang}
                onClick={this.onRoadTypeChange}
              />
              <HeaderGamePlay
                lang={this.state.lang}
                gameType={this.props.gameType}
                onGamePlayChange={this.onGamePlayChange}
                onGamePlayMapChange={this.onGamePlayMapChange}
              />
            </div>
            <Table
              lang={this.state.lang}
              colCount={this.colCount}
              rowCount={this.rowCount}
              winNumbersShow={this.winNumbersShow}
              gameType={this.props.gameType}
              winNumbers={this.props.winNumbers}
              roadType={this.state.roadType}
              gamePlayType={this.state.gamePlayType}
              gamePlayMap={this.state.gamePlayMap}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Index
