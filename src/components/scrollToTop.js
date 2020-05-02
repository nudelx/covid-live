import React, { useState, useEffect, useCallback } from 'react'

export default () => {
  const [visible, setVisible] = useState(false)
  const handleScroll = useCallback(() => {
    if (!visible && window.scrollY > 200) setVisible(true)
    if (visible && window.scrollY < 200) setVisible(false)
  }, [visible])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll, visible])
  if (!visible) return null
  return (
    <div onClick={() => (window.location.href = '#')} className="scrollToTop">
      <span aria-label="img" role="img">
        🔝
      </span>
    </div>
  )
}
