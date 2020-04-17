export const localStorageRefresh = (token) => {
  const tokenName = 'covid19token'
  const localToken = localStorage.getItem('covid19token')
  if (localToken !== token) {
    localStorage.clear()
    localStorage.setItem(tokenName, token)
  }
}
