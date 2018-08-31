import language from './Language'

const langValidation = (lang) => {
  if (language[lang] === undefined) lang = 'zh-TW'
  return lang
}

export function roadTypeList(lang) {
  lang = langValidation(lang)
  return [
    { active: true, name: language[lang].roadType[0] },
    { active: false, name: language[lang].roadType[1] },
  ]
}

// 0: 時時彩, 1: PK10
export function gamePlayTypeList(gameType = 0, lang) {
  lang = langValidation(lang)
  if (gameType === 0) {
    return [
      { active: true, name: language[lang].playType[0], mapItemIndex: 0 },
      { active: false, name: language[lang].playType[1], mapItemIndex: 0 },
      { active: false, name: language[lang].playType[2], mapItemIndex: 0 },
      { active: false, name: language[lang].playType[3], mapItemIndex: 0 },
      { active: false, name: language[lang].playType[4], mapItemIndex: 0 },
      { active: false, name: language[lang].playType[5], mapItemIndex: 1 },
    ]
  } else if (gameType === 1) {
    return [
      { active: true, name: language[lang].playType[6], mapItemIndex: 2 },
      { active: false, name: language[lang].playType[5], mapItemIndex: 3 },
    ]
  } else if (gameType === 2) {
    return [
      { active: true, name: language[lang].playType[0], mapItemIndex: 4 },
      { active: false, name: language[lang].playType[1], mapItemIndex: 4 },
      { active: false, name: language[lang].playType[2], mapItemIndex: 4 },
      { active: false, name: language[lang].playType[3], mapItemIndex: 4 },
      { active: false, name: language[lang].playType[4], mapItemIndex: 4 },
      { active: false, name: language[lang].playType[7], mapItemIndex: 0 },
      { active: false, name: language[lang].playType[5], mapItemIndex: 1 },
    ]
  }
}

export function mapTypeList(mapItemIndex = 0, lang) {
  lang = langValidation(lang)
  if (mapItemIndex === 0) {
    return [
      { active: true, name: language[lang].mapType[0] },
      { active: false, name: language[lang].mapType[1] },
    ]
  } else if (mapItemIndex === 1) {
    return [
      { active: true, name: language[lang].mapType[2] },
      { active: false, name: language[lang].mapType[3] },
      { active: false, name: language[lang].mapType[4] },
      { active: false, name: language[lang].mapType[5] },
      { active: false, name: language[lang].mapType[6] },
      { active: false, name: language[lang].mapType[7] },
      { active: false, name: language[lang].mapType[8] },
      { active: false, name: language[lang].mapType[9] },
      { active: false, name: language[lang].mapType[10] },
      { active: false, name: language[lang].mapType[11] },
    ]
  } else if (mapItemIndex === 2) {
    return [
      { active: true, name: language[lang].mapType[12] },
      { active: false, name: language[lang].mapType[13] },
      { active: false, name: language[lang].mapType[14] },
    ]
  } else if (mapItemIndex === 3) {
    return [
      { active: true, name: language[lang].mapType[15] },
      { active: false, name: language[lang].mapType[16] },
      { active: false, name: language[lang].mapType[17] },
      { active: false, name: language[lang].mapType[18] },
      { active: false, name: language[lang].mapType[19] },
    ]
  } else if (mapItemIndex === 4) {
    return [
      { active: true, name: language[lang].mapType[20] },
      { active: false, name: language[lang].mapType[0] },
      { active: false, name: language[lang].mapType[1] },
    ]
  }
}