import React from 'react'
import Nav from './Nav';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import ProjectPage from './pages/ProjectPage';
import ContactPage from './pages/ContactPage';
import './App.css';
// import { Route, BrowserRouter, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Nav/>
    <HomePage/>
    <AboutPage/>
    <SkillsPage/>
    <ProjectPage/>
    <ContactPage/>
    </>
    // <BrowserRouter>
    // <div className='App'>
    //   <Nav />
    //   <div>
    //     <Routes>
    //       <Route path='/' element={ <HomePage /> }/>
    //       <Route path='/about' element={ <AboutPage /> }/>
    //       <Route path='/skills' element={ < SkillsPage/> }/>
    //       <Route path='/projects' element={ <ProjectPage /> }/>
    //       <Route path='/contact' element={ <ContactPage /> }/>
    //     </Routes>
    //   </div>  
    // </div>
    // </BrowserRouter>
    
  )
}

export default App;