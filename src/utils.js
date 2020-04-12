export const exclude = [
  'europe',
  'asia',
  'north america',
  'south america',
  'total:'
]
export const filterCards = setWorld => res => {
  return res.filter(c => {
    if (c.country.toLowerCase() === 'world') {
      typeof setWorld === 'function' && setWorld(c)
      return false
    }
    if (c.country.length === 0 || exclude.includes(c.country.toLowerCase())) {
      return false
    }
    return true
  })
}

export const handleError = setError => error => {
  console.log(error.toString()) || setError('The API temporary unavailable ')
}
