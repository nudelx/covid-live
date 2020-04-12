import { useState } from 'react'

export default init => {
  const [show, setShow] = useState(init)

  return {
    show,
    setShow
  }
}
