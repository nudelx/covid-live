import React, { useState, useEffect, useCallback } from 'react'

export default props => {
  const { options, index, name } = props
  const [menuOpen, setMenuOpen] = useState(null)
  const [selected, setSelected] = useState(null)
  const [typeValue, setTypeValue] = useState(null)
  const style = {
    width: '350px',
    textAlign: 'center',
    display: 'inline-block'
  }

  const handleKeyUp = useCallback(
    e => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false)
        setTypeValue(null)
      }
    },
    [menuOpen]
  )

  const openMenu = () => {
    setMenuOpen(!menuOpen)
  }
  const getSelected = el => {
    const selected = options.filter(o => o[index] === el.id)
    setSelected(selected.length && selected.pop())
    setMenuOpen(false)
    setTypeValue(null)
  }

  const typeIn = el => {
    setTypeValue(el.target.value)
    selected && setSelected(null)
    !menuOpen && setMenuOpen(true)
  }

  const filtered =
    typeValue && typeValue.length
      ? options.filter(item => item.country.match(new RegExp(typeValue, 'i')))
      : options

  useEffect(() => {
    document.addEventListener('keydown', handleKeyUp, false)
    return () => document.removeEventListener('keydown', handleKeyUp, false)
  }, [handleKeyUp])

  return (
    <div className="dropDown" style={style}>
      <div className="inputHolder" style={{ ...style, whiteSpace: 'nowrap' }}>
        <input
          style={{ width: '100%' }}
          placeholder="select a country or start typing"
          className="input"
          onChange={typeIn}
          value={(selected && selected[name]) || typeValue || ''}
        />
        <i className="button" onClick={openMenu}>
          ▿
        </i>
      </div>
      <div className="menu" style={{ display: menuOpen ? 'block' : 'none' }}>
        <ul>
          {filtered &&
            filtered.map(o => (
              <li
                onClick={e => getSelected(e.target)}
                id={o[index]}
                key={o[index]}
              >
                {o[name]}
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}
