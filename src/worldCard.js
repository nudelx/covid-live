import React, { useEffect, useState, useRef } from 'react'
import { options, capitalize } from './options'

export default ({ world }) => {
  const ulRef = useRef(null)
  const [pos, setPos] = useState(0)
  const [width, setWidth] = useState(window.outerWidth)
  useEffect(() => {
    const resizeListener = () => {
      setWidth(window.outerWidth)
      setPos(0)
    }
    window.addEventListener('resize', resizeListener)
    return () => {
      window.removeEventListener('resize', resizeListener)
    }
  }, [])

  useEffect(() => {
    const calcPos = (x) => (Math.abs(x) > width ? x * -1 : x)
    const t = setTimeout(() => setPos(calcPos(pos) + 1), 20)
    return () => clearTimeout(t)
  }, [pos, width])

  return world ? (
    <div className="worldCard">
      <div className="world worldTitle"></div>
      <ul ref={ulRef}>
        {options.map((o) => (
          <li style={{ left: `${-pos}px` }} key={o}>{`${capitalize(
            o
          )}: ${world && world[o]}`}</li>
        ))}
      </ul>
    </div>
  ) : null
}
