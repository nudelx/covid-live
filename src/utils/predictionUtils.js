export const normalizeData = (data) => {
  const e = data.map((c) => {
    const obj = {
      confidence: c.confidence,
      country: c.country,
      update: c.update,
      countryColors: c.colors,
    }

    const historyLength = c.growth.length - 1
    obj.data = c.trend.reduce(
      (all, value, index) => [
        ...all,
        {
          trend: value,
          growth: c.growth[index],
          date: c.dates[index],
          cases: c.cases[index],
          casesP: index < historyLength ? null : c.casesP[index],
          daily: c.daily[index],
          dailyP: index < historyLength ? null : c.dailyP[index],
        },
      ],
      []
    )
    return obj
  })
  return e
}

export const dataKeysObj = {
  growth: ['trend', 'growth'],
  daily: ['dailyP', 'daily'],
  cases: ['casesP', 'cases'],
}

export const COLORS = ['#eb4d4b', '#f9ca24', '#6ab04c']
export const EMPTY_COLOR = '#072f3f'
export const getColorIndex = (value) => {
  if (value <= 75) return 0
  if (value > 75 && value <= 90) return 1
  if (value > 90) return 2
}
