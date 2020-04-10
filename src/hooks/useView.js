import { useState } from 'react'

export default init => {
  const [show, setShow] = useState('grid')
  const [predShow, setShowPred] = useState('live')

  return {
    show,
    setShow,
    predShow,
    setShowPred
  }
}
