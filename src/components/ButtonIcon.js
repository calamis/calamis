import React from 'react';
import { Link } from 'gatsby';

const ButtonIcon = ({ title, btnLink }) => {
  return (
    <Link to={btnLink} className="the__btnIcon">
      <div className="block__reveal">
        <div className="reveal__item">{title}<svg className="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 359.96 135.05"> <path d="M320,55.76L264.5,0.24c1-.11,1.66-0.22,2.29-0.23,7.92,0,15.83,0,23.75,0a4.45,4.45,0,0,1,2.85,1.07Q326.24,33.85,359,66.67c0.23,0.23.42,0.51,1,1.2a18.61,18.61,0,0,0-2.18,1.64q-31.84,31.79-63.62,63.64a5.8,5.8,0,0,1-4.57,1.91c-7.41-.1-14.83,0-22.25,0h-2.71l55.53-55.53-0.42-.61H0V56.38H319.76Z"></path> </svg></div>
      </div>
    </Link>
  )
}

export default ButtonIcon;