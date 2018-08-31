const SSCCompareItems = [
  { A: 0, B: 1 },
  { A: 0, B: 2 },
  { A: 0, B: 3 },
  { A: 0, B: 4 },
  { A: 1, B: 2 },
  { A: 1, B: 3 },
  { A: 1, B: 4 },
  { A: 2, B: 3 },
  { A: 2, B: 4 },
  { A: 3, B: 4 },
]

const SSCMap = (winNumbers, winNumbersShow, gamePlayType, gamePlayMap) => {
  let firstData, drawCount = 0
  for (let i = winNumbers.length - winNumbersShow; i >= 0; i--) {
    if (winNumbers[i].indexOf('X') >= 0) {
      firstData = 9
      continue
    } else if (firstData === 9 && winNumbers[i].indexOf('X') === -1) {
      winNumbers = winNumbers.slice(i + 1, winNumbers.length)
      break
    }

    if (gamePlayType === 5) {
      const comp = SSCCompareItems[gamePlayMap]
      const A = parseInt(winNumbers[i][comp.A], 10)
      const B = parseInt(winNumbers[i][comp.B], 10)
      if (A > B && firstData === undefined) {
        firstData = 0
      } else if (A < B && firstData === undefined) {
        firstData = 1
      } else if ((firstData === 0 && A < B) || (firstData === 1 && A > B)) {
        winNumbers = winNumbers.slice(i + 1 + drawCount, winNumbers.length)
        break
      } else if (firstData !== undefined && A === B) {
        drawCount++
      } else {
        drawCount = 0
      }
    } else if (gamePlayType !== 5 && gamePlayMap === 0) {
      if (winNumbers[i][gamePlayType] % 2 === 1 && firstData === undefined) {
        firstData = 3
      } else if (winNumbers[i][gamePlayType] % 2 === 0 && firstData === undefined) {
        firstData = 4
      } else if ((firstData === 3 && winNumbers[i][gamePlayType] % 2 === 0) ||
                 (firstData === 4 && winNumbers[i][gamePlayType] % 2 === 1)) {
        winNumbers = winNumbers.slice(i + 1, winNumbers.length)
        break
      }
    } else if (gamePlayType !== 5 && gamePlayMap === 1) {
      if (winNumbers[i][gamePlayType] >= 5 && firstData === undefined) {
        firstData = 5
      } else if (winNumbers[i][gamePlayType] < 5 && firstData === undefined) {
        firstData = 6
      } else if ((firstData === 5 && winNumbers[i][gamePlayType] < 5) ||
                 (firstData === 6 && winNumbers[i][gamePlayType] >= 5)) {
        winNumbers = winNumbers.slice(i + 1, winNumbers.length)
        break
      }
    }
  }

  const data = []
  for (let i = 0; i < winNumbers.length; i++) {
    if (winNumbers[i].indexOf('X') >= 0) {
      data.push({ content: 9 })  // 作廢
      continue
    }

    if (gamePlayType === 5) {
      const comp = SSCCompareItems[gamePlayMap]
      const A = parseInt(winNumbers[i][comp.A], 10)
      const B = parseInt(winNumbers[i][comp.B], 10)
      if (A > B) {
        data.push({ content: 0 })   // 龍
      } else if (A < B) {
        data.push({ content: 1 })   // 虎
      } else if (A === B){
        data.push({ content: 2 })   // 和
      }
    } else if (gamePlayType !== 5 && gamePlayMap === 0) {
      if (winNumbers[i][gamePlayType] % 2 === 1) {
        data.push({ content: 3 })   // 單
      } else if (winNumbers[i][gamePlayType] % 2 === 0) {
        data.push({ content: 4 })   // 雙
      }
    } else if (gamePlayType !== 5 && gamePlayMap === 1) {
      if (winNumbers[i][gamePlayType] >= 5) {
        data.push({ content: 5 })   // 大
      } else {
        data.push({ content: 6 })   // 小
      }
    }
  }

  return data
}

const PK10CompareItems = [
  { A: 0, B: 9 },
  { A: 1, B: 8 },
  { A: 2, B: 7 },
  { A: 3, B: 6 },
  { A: 4, B: 5 },
]

const PK10Map = (winNumbers, winNumbersShow, gamePlayType, gamePlayMap) => {
  let firstData, drawCount = 0
  for (let i = winNumbers.length - winNumbersShow; i >= 0; i--) {
    if (winNumbers[i].indexOf('XX') >= 0) {
      firstData = 9
      continue
    } else if (firstData === 9 && winNumbers[i].indexOf('XX') === -1) {
      winNumbers = winNumbers.slice(i + 1, winNumbers.length)
      break
    }

    const total = parseInt(winNumbers[i][0], 10) + parseInt(winNumbers[i][1], 10)
    if (gamePlayType === 0 && gamePlayMap === 0) {
      if (firstData === undefined) {
        firstData = total
      } else if (firstData !== undefined && firstData !== total) {
        winNumbers = winNumbers.slice(i + 1, winNumbers.length)
        break
      }
    } else if (gamePlayType === 0 && gamePlayMap === 1) {
      if (firstData === undefined && total % 2 === 1) {
        firstData = 3
      } else if (firstData === undefined && total % 2 === 0) {
        firstData = 4
      } else if ((firstData === 3 && total % 2 === 0) ||
                 (firstData === 4 && total % 2 === 1)) {
        winNumbers = winNumbers.slice(i + 1, winNumbers.length)
        break
      }
    } else if (gamePlayType === 0 && gamePlayMap === 2) {
      if (firstData === undefined && total > 11) {
        firstData = 5
      } else if (firstData === undefined && total <= 11) {
        firstData = 6
      } else if ((firstData === 5 && total <= 11) ||
                 (firstData === 6 && total > 11)) {
        winNumbers = winNumbers.slice(i + 1, winNumbers.length)
        break
      }
    } else if (gamePlayType === 1) {
      const comp = PK10CompareItems[gamePlayMap]
      const A = parseInt(winNumbers[i][comp.A], 10)
      const B = parseInt(winNumbers[i][comp.B], 10)
      if (A > B && firstData === undefined) {
        firstData = 0
      } else if (A < B && firstData === undefined) {
        firstData = 1
      } else if ((firstData === 0 && A < B) || (firstData === 1 && A > B)) {
        winNumbers = winNumbers.slice(i + 1 + drawCount, winNumbers.length)
        break
      } else if (firstData !== undefined && A === B) {
        drawCount++
      } else {
        drawCount = 0
      }
    }
  }

  const data = []
  for (let i = 0; i < winNumbers.length; i++) {
    if (winNumbers[i].indexOf('XX') >= 0) {
      data.push({ content: 9 })  // 作廢
      continue
    }
    
    switch (gamePlayType) {
      case 0:
        const total = parseInt(winNumbers[i][0], 10) + parseInt(winNumbers[i][1], 10)
        if (gamePlayMap === 0) {
          data.push({ isCustom: true, color: total % 2 === 1 ? 'red' : 'blue', content: total })  // 冠亞和值
        } else if (gamePlayMap === 1 && total % 2 === 1) {
          data.push({ content: 3 })   // 單
        } else if (gamePlayMap === 1 && total % 2 === 0) {
          data.push({ content: 4 })   // 雙
        } else if (gamePlayMap === 2 && total > 11) {
          data.push({ content: 5 })   // 大
        } else if (gamePlayMap === 2 && total <= 11) {
          data.push({ content: 6 })   // 小
        }
        break
      case 1:
        const comp = PK10CompareItems[gamePlayMap]
        const A = parseInt(winNumbers[i][comp.A], 10)
        const B = parseInt(winNumbers[i][comp.B], 10)
        if (A > B) {
          data.push({ content: 0 })   // 龍
        } else if (A < B) {
          data.push({ content: 1 })   // 虎
        } else if (A === B){
          data.push({ content: 2 })   // 和
        }
        break
      default:
        console.warn('gameplay type is incorrect.')
        break
    }
  }

  return data
}

// 11選5
const ECFMap = (winNumbers, winNumbersShow, gamePlayType, gamePlayMap) => {
  let firstData, drawCount = 0
  for (let i = winNumbers.length - winNumbersShow; i >= 0; i--) {
    if (winNumbers[i].indexOf('XX') >= 0) {
      firstData = 9
      continue
    } else if (firstData === 9 && winNumbers[i].indexOf('XX') === -1) {
      winNumbers = winNumbers.slice(i + 1, winNumbers.length)
      break
    }

    if (gamePlayType === 6) {
      const comp = SSCCompareItems[gamePlayMap]
      const A = parseInt(winNumbers[i][comp.A], 10)
      const B = parseInt(winNumbers[i][comp.B], 10)
      if (A === 11 || B === 11) {
        drawCount++
      } else if (A > B && firstData === undefined) {
        firstData = 0
      } else if (A < B && firstData === undefined) {
        firstData = 1
      } else if ((firstData === 0 && A < B) || (firstData === 1 && A > B)) {
        winNumbers = winNumbers.slice(i + 1 + drawCount, winNumbers.length)
        break
      } else {
        drawCount = 0
      }
    } else if (gamePlayType < 5 && gamePlayMap === 1) {
      if (winNumbers[i][gamePlayType] === '11') {
        drawCount++
      } else if (winNumbers[i][gamePlayType] % 2 === 1 && firstData === undefined) {
        firstData = 3
      } else if (winNumbers[i][gamePlayType] % 2 === 0 && firstData === undefined) {
        firstData = 4
      } else if ((firstData === 3 && winNumbers[i][gamePlayType] % 2 === 0) ||
                 (firstData === 4 && winNumbers[i][gamePlayType] % 2 === 1)) {
        winNumbers = winNumbers.slice(i + 1 + drawCount, winNumbers.length)
        break
      } else {
        drawCount = 0
      }
    } else if (gamePlayType < 5 && gamePlayMap === 2) {
      if (winNumbers[i][gamePlayType] === '11') {
        drawCount++
      } else if (winNumbers[i][gamePlayType] >= 5 && firstData === undefined) {
        firstData = 5
      } else if (winNumbers[i][gamePlayType] < 5 && firstData === undefined) {
        firstData = 6
      } else if ((firstData === 5 && winNumbers[i][gamePlayType] < 5) ||
                 (firstData === 6 && winNumbers[i][gamePlayType] >= 5)) {
        winNumbers = winNumbers.slice(i + 1 + drawCount, winNumbers.length)
        break
      } else {
        drawCount = 0
      }
    } else if (gamePlayType < 5 && gamePlayMap === 0) {
      const number = winNumbers[i][gamePlayType]
      if (firstData === undefined) {
        firstData = number
      } else if (firstData !== undefined && firstData !== number) {
        winNumbers = winNumbers.slice(i + 1, winNumbers.length)
        break
      }
    } else if (gamePlayType === 5 && gamePlayMap === 0) {
      const total = winNumbers[i].reduce((a, b) => parseInt(a, 10) + parseInt(b, 10))
      if (total % 2 === 1 && firstData === undefined) {
        firstData = 3
      } else if (total % 2 === 0 && firstData === undefined) {
        firstData = 4
      } else if ((firstData === 3 && total % 2 === 0) ||
                 (firstData === 4 && total % 2 === 1)) {
        winNumbers = winNumbers.slice(i + 1, winNumbers.length)
        break
      }
    } else if (gamePlayType === 5 && gamePlayMap === 1) {
      const total = winNumbers[i].reduce((a, b) => parseInt(a, 10) + parseInt(b, 10))
      if (total === 30) {
        drawCount++
      } else if (total > 30 && firstData === undefined) {
        firstData = 5
      } else if (total < 30 && firstData === undefined) {
        firstData = 6
      } else if ((firstData === 5 && total < 30) ||
                 (firstData === 6 && total > 30)) {
        winNumbers = winNumbers.slice(i + 1 + drawCount, winNumbers.length)
        break
      } else {
        drawCount = 0
      }
    }
  }

  const data = []
  for (let i = 0; i < winNumbers.length; i++) {
    if (winNumbers[i].indexOf('XX') >= 0) {
      data.push({ content: 9 })  // 作廢
      continue
    }

    if (gamePlayType === 6) {
      const comp = SSCCompareItems[gamePlayMap]
      const A = parseInt(winNumbers[i][comp.A], 10)
      const B = parseInt(winNumbers[i][comp.B], 10)
      if (A === B || A === 11 || B === 11){
        data.push({ content: 2 })   // 和
      } else if (A > B) {
        data.push({ content: 0 })   // 龍
      } else if (A < B) {
        data.push({ content: 1 })   // 虎
      }
    } else if (gamePlayType < 5 && gamePlayMap === 1) {
      if (winNumbers[i][gamePlayType] === '11') {
        data.push({ content: 2 })   // 和
      } else if (winNumbers[i][gamePlayType] % 2 === 1) {
        data.push({ content: 3 })   // 單
      } else if (winNumbers[i][gamePlayType] % 2 === 0) {
        data.push({ content: 4 })   // 雙
      }
    } else if (gamePlayType < 5 && gamePlayMap === 2) {
      if (winNumbers[i][gamePlayType] === '11') {
        data.push({ content: 2 })   // 和
      } else if (winNumbers[i][gamePlayType] >= 6) {
        data.push({ content: 5 })   // 大
      } else {
        data.push({ content: 6 })   // 小
      }
    } else if (gamePlayType < 5 && gamePlayMap === 0) {
      const number = winNumbers[i][gamePlayType]
      data.push({ isCustom: true, color: number % 2 === 1 ? 'red' : 'blue', content: number })  
    } else if (gamePlayType === 5 && gamePlayMap === 0) {
      const total = winNumbers[i].reduce((a, b) => parseInt(a, 10) + parseInt(b, 10))
      if (total % 2 === 1) {
        data.push({ content: 3 })   // 單
      } else if (total % 2 === 0) {
        data.push({ content: 4 })   // 雙
      }
    } else if (gamePlayType === 5 && gamePlayMap === 1) {
      const total = winNumbers[i].reduce((a, b) => parseInt(a, 10) + parseInt(b, 10))
      if (total === 30) {
        data.push({ content: 2 })   // 和
      } else if (total > 30) {
        data.push({ content: 5 })   // 大
      } else if (total < 30) {
        data.push({ content: 6 })   // 小
      }
    }
  }

  return data
}

const rowInit = (rowCount, colCount) => {
  const rows = []
  for (let i = 0; i < rowCount; i++) {
    const row = []
    for (let j = 0; j < colCount; j++) {
      row.push(null)
    }
    rows.push(row)
  }

  return rows
}

const transformByRoadType = (data, rowCount, colCount, roadType) => {
  const rows = rowInit(rowCount, colCount)

  switch (roadType) {
    case 0:
      let preData, nowRow, nowCol, overFlowCol
      for (let i = 0; i < data.length; i++) {
        if (i === 0) {
          preData = data[i]
          nowRow = 0
          nowCol = 0
          overFlowCol = 0
          rows[0][0] = data[i]
          continue
        }

        // 相同或和 到底要走L型
        if ((preData.content === data[i].content || data[i].content === 2) &&
            (nowRow === rowCount - 1 || rows[nowRow + 1][nowCol])) {
          // 走到底就走L OR 有值就直接走L
          rows[nowRow][nowCol + ++overFlowCol] = data[i]
        } else if ((preData.content === data[i].content || data[i].content === 2) &&
                    nowRow !== rowCount - 1 &&
                    !rows[nowRow + 1][nowCol]) {
          // 相同 但不須走L
          rows[++nowRow][nowCol] = data[i]
        } else {
          // 不相同
          rows[0][++nowCol] = data[i]
          preData = data[i]
          nowRow = 0
          overFlowCol = 0

          // PK10有可能出格
          if (nowCol >= colCount) {
            for (let j = 1; j < rowCount; j++) {
              rows[j].push(null)
            }
          }
        }
      }
      break
    case 1:
      for (let i = 0; i < data.length; i++) {
        rows[i % rowCount][Math.floor(i / rowCount)] = data[i]
      }
      break
    default:
      console.warn('road type is incorrect.')
      break
  }

  return rows
}

export function mapBuilder(options) {
  let mapData = []
  switch (options.gameType) {
    case 0:
      mapData = SSCMap(options.winNumbers, options.winNumbersShow, options.gamePlayType, options.gamePlayMap)
      break
    case 1:
      mapData = PK10Map(options.winNumbers, options.winNumbersShow, options.gamePlayType, options.gamePlayMap)
      break
    case 2:
      mapData = ECFMap(options.winNumbers, options.winNumbersShow, options.gamePlayType, options.gamePlayMap)
      break
    default:
      console.warn('game type is incorrect.')
      break
  }

  return transformByRoadType(mapData, options.rowCount, options.colCount, options.roadType)
}