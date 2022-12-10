import React from 'react'

function Button({ type, children }) {
  return (
    <button className={"btn btn-" + type}>{children}</button>
  )
}

export default Button