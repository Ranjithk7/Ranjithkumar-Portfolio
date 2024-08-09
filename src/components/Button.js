import React from 'react'

const Button = ({children, href, className, css, target}) => {
  return (
    <a 
      target={target}
      href={href} 
      css={css} 
      className={`btn-box || ${className}`} >
        {children}
      </a>
    )
}

export default Button