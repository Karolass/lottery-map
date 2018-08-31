import React, { Component } from 'react'

import language from './Language'
import RowData from './RowData'

class TableRow extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { lang } = this.props

    return (
      <tr>
        {
          this.props.data.map((v, key) => {
            if (!v) {
              return <RowData key={key} />
            }

            let d
            if (!v.isCustom) {
              switch (v.content) {
                case 0:
                  d = <RowData key={key} color="red" content={language[lang].result[0]} />
                  break
                case 1:
                  d = <RowData key={key} color="blue" content={language[lang].result[1]} />
                  break
                case 2:
                  d = <RowData key={key} color="green" content={language[lang].result[2]} />
                  break
                case 3:
                  d = <RowData key={key} color="red" content={language[lang].result[3]} />
                  break
                case 4:
                  d = <RowData key={key} color="blue" content={language[lang].result[4]} />
                  break
                case 5:
                  d = <RowData key={key} color="red" content={language[lang].result[5]} />
                  break
                case 6:
                  d = <RowData key={key} color="blue" content={language[lang].result[6]} />
                  break
  
                case 9:
                  d = <RowData key={key} color="gray" content="X" />
                  break
                default:
                  d = <RowData key={key} />
                  break
              }
            } else {
              d = <RowData key={key} color={v.color} content={v.content} />
            }

            return d
          })
        }
      </tr>
    )
  }
}

export default TableRow
