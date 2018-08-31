import React, { Component } from 'react'

import Row from './TableRow'
import { mapBuilder } from './Logic'

class Table extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { lang, winNumbers, rowCount, colCount, winNumbersShow, roadType, gameType, gamePlayType, gamePlayMap } = this.props
    const rows = mapBuilder({
      winNumbers, rowCount, colCount, winNumbersShow, roadType, gameType, gamePlayType, gamePlayMap
    })

    return (
      <table className="table">
        <tbody>
          {
            rows.map((v, key) =>
              <Row
                key={key}
                lang={lang}
                data={v}
              />
            )
          }
        </tbody>
      </table>
    )
  }
}

export default Table
