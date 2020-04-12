import React from 'react'

export default ({ tab, setTabs, tabs }) => {
  return (
    <ul className="tabs">
      {tabs.map(t => (
        <li
          key={t.id}
          id={t.id}
          onClick={e => setTabs(e.target.id)}
          className={tab === t.id ? 'active' : ''}
        >
          {`${t.icon} ${t.label}`}
        </li>
      ))}
    </ul>
  )
}
