import React, { Component } from 'react'
import Map from './map'

class App extends Component {
  constructor() {
    super()
    this.state = {
      count: 30,
      winNumbers: []
    }
  }

  componentDidMount() {
    this.randomNumbers()
  }

  onClick = () => {
    this.randomNumbers()
  }

  randomNumbers = () => {
    const rows = []
    for (let i = 0; i < this.state.count; i++) {
      const row = []
      for (let j = 0; j < 5; j++) {
        row.push(Math.floor(Math.random() * 10))
      }
      rows.push(row)
    }

    this.setState({ winNumbers: rows })
  }

  render() {

    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ flex: '1 1 50%' }}>
          <button onClick={this.onClick}>隨機產生</button>
          {
            this.state.winNumbers.map((w, k) => <div key={k}>{k+1}: {w.join(',')}</div>)
          }
        </div>
        <div style={{ flex: '1 1 50%' }}>
          <Map
            gameType={0}
            winNumbers={this.state.winNumbers}
          />
        </div>
      </div>
    )
  }
}

export default App
