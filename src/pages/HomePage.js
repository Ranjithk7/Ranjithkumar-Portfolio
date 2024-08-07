import React from 'react';
import AutoType from '../components/AutoType';
import '../css/home.css';
import Button from '../components/Button';
import Hacker from '../images/saianon.png'

const HomePage = () => {
  return (
    <section class="home" id="home">
        <div class="max-width">
            <div class="home-content">
                <div className='column left'>
                    <div class="text-1">Hello, my name is</div>
                    <div class="text-2">Ranjithkumar - V</div>
                    <div class="text-3"><div>And I'm a </div><AutoType/></div>
                    <Button href="#" className="anim">Hire me</Button>
                    <div className="home-sci">
                        <p>Connect with me:</p>
                        <a href="https://github.com/ranjithk7" target="_blank"><i className='bx bxl-github'></i></a>
                        <a href="https://www.linkedin.com/in/ranjithk3" target="_blank"><i className='bx bxl-linkedin'></i></a>
                        <a href="https://wa.me/8838610066" target="_blank"><i className='bx bxl-whatsapp'></i></a>
                        <a href="https://www.instagram.com/ranjithk_03" target="_blank"><i className='bx bxl-instagram'></i></a>
                    </div>
                </div>
                <div className="column right">
                        <div className="image">
                            <img src={Hacker} alt="nop" />
                        </div>
                </div>  
            </div> 
        </div>
        
    </section>        
  )
}

export default HomePage