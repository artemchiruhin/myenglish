import React from 'react'

function ErrorMessage({ children }) {
  return (
    <span className="invalid-feedback">{children}</span>
  )
}

export default ErrorMessage