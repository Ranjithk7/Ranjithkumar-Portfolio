import React from 'react'

const Button = ({children, href, className, css}) => {
  return (
    <a 
      href={href} 
      css={css} 
      className={`btn-box || ${className}`} >
        {children}
      </a>
    )
}

export default Button