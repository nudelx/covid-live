export const options = [
  'active',
  'cases',
  'critical',
  'deaths',
  'recovered',
  'todayCases',
  'todayDeaths'
]

export const capitalize = s => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}
