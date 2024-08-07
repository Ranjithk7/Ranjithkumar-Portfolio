import React, { useRef, useEffect } from 'react';
import Typed from 'typed.js';

const AutoType = () => {
    const text = useRef(null);

    useEffect(() => {
        const typed = new Typed(text.current, {
            strings: [
              "Programmer",
              "Web Developer",
              "Problem Solver",
              "BuG HunTer"
            ],
            typeSpeed: 100,   
            backSpeed: 100,   
            backDelay: 1000,  
            loop: true        
          });

          return () => {
            typed.destroy();
          };
    }, [])
  return (
    <span ref={text} />
  )
}

export default AutoType