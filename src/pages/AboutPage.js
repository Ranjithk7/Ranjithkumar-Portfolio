import React from 'react';
import '../css/about.css';
import SocialIcons from '../components/SocialIcons';
import AutoType from '../components/AutoType';
import Button from '../components/Button';

const AboutPage = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="max-width">
          <h2 className="title">About me</h2>
          <div className="about-content">
            <div className="column right">
              <div className="text">I'm Ranjithkumar and I'm a <AutoType /></div>
              <div className='about-me'>
              <p>
                Hello, Im from Tiruchengode, Namakkal. I have completed my graduation in Bachelor of Computer Application in 2024 at Sengunthar arts & Science College.
                Im well versed with Html, Css and JavaScript. I started my career in programming since i was age 16
              </p>
              <p>
                This portfolio highlights my passion for web development and my commitment to development practices. 
                I have acquired fundamental knowledge and skills in various areas of web development,
                allowing me to contribute to the organizations and individual.
                Developed multiple projects usind React.js, Javascript, Node.js and etc...
              </p>
              <p>
                My strengths are im very good at mathematics and numbers related subjects, that's the reason why i'm get into coding. 
                I'm also an problem solver and i have the ability quikly find a efficient solution to any problems.
                I was able to develop an strong understanding of Computer Programming and Software development and i have also completed UX design certification course.
              </p>
              <p>
                My weekness are i sometimes have difficult with time management and i ended up spending much of 
                my personal time on studying and working, however this something i constantly working on with better results each day
              </p>
              </div>
              
              <Button
                download="Ranjithkumar V/Resume"
                css={`
                padding:10px 20px;
                border-radius:10px;
                font-size:15px;`}>
                  Downnload CV
              </Button>
            </div>
          </div>
        </div>
        <SocialIcons />
      </section>
    </>
  )
}

export default AboutPage;