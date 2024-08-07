import React from 'react';
import Matrix from './canvas/matrix';
// import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <>
    <Matrix />
    <header className="header">
        <a to="#" className="logo"/>
       
        <nav className="navbar">
            <a href="#home" title="Home" ><i className="fas fa-home">  Home</i></a>
            <a href="#about" title="About" ><i className="fas fa-user">  About</i></a>
            <a href="#skills" title="Skills" ><i className="fas fa-cogs">  Skills</i></a>
            <a href="#projects" title="Projects" ><i className="fas fa-project-diagram">  Projects</i></a>
            <a href="#contact" title="Contact us" ><i className="fas fa-envelope">  Contact</i></a>
        </nav>
        <nav className="phone-navbar">
        <a href="#home" title="Home" ><i className="fas fa-home"></i></a>
            <a href="#about" title="About" ><i className="fas fa-user"></i></a>
            <a href="#skills" title="Skills" ><i className="fas fa-cogs"></i></a>
            <a href="#projects" title="Projects" ><i className="fas fa-project-diagram"></i></a>
            <a href="#contact" title="Contact us" ><i className="fas fa-envelope"></i></a>
        </nav>
    </header>    
    </>
  )
}

export default Nav
