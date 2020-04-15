export const normalizeData = (data) => {
  const e = data.map((c) => {
    const obj = {
      confidence: c.confidence,
      country: c.country,
      update: c.update,
    }

    obj.data = c.growth.reduce(
      (all, value, index) => [
        ...all,
        {
          growth: value,
          trend: c.trend[index],
          date: c.dates[index],
          cases: c.cases[index],
          daily: c.daily[index],
        },
      ],
      []
    )
    return obj
  })
  return e
}

export const dataKeysObj = {
  growth: ['growth', 'trend'],
  daily: ['daily'],
  cases: ['cases'],
}
