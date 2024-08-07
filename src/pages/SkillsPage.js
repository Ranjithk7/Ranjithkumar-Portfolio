import React from 'react'
import SocialIcons from '../components/SocialIcons';
import '../css/skills.css';
import Button from '../components/Button';

const SkillsPage = () => {
  return (
        <section class="skills" id="skills">
        <div class="max-width">
            <h2 class="title">My skills</h2>
            <div class="skills-content">
                <div class="column left">
                    <div class="text">My creative skills & experiences.</div>
                    <p>My skills are HTML, CSS, JavaScript, Typescript, Tailwind Css, React JS and Node JS. I have full understanding of React hooks, 
                        reusable components, react router dom for navigation through pages. </p>
                    <p>My other skills are problem solving, Troupleshooting, Debugging, Team working and Punctuality</p>
                    <Button href="#" css={`
                        padding:10px 20px;
                        border-radius:10px;
                        font-size:15px;`}
                        >Read more</Button>
                </div>
                <div class="column right">
                    <div class="bars">
                        <div class="info">
                            <span>HTML</span>
                            <span>90%</span>
                        </div>
                        <div class="line html"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>CSS</span>
                            <span>70%</span>
                        </div>
                        <div class="line css"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>JavaScript</span>
                            <span>60%</span>
                        </div>
                        <div class="line js"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>Java</span>
                            <span>50%</span>
                        </div>
                        <div class="line java"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>Python</span>
                            <span>70%</span>
                        </div>
                        <div class="line py"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>Ms Office (Excel, Word, PowerPoint)</span>
                            <span>60%</span>
                        </div>
                        <div class="line ms"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>MERN Stack</span>
                            <span>70%</span>
                        </div>
                        <div class="line mern"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>MySQL</span>
                            <span>60%</span>
                        </div>
                        <div class="line mysql"></div>
                    </div>
                </div>
            </div>
        </div>
        <SocialIcons />
    </section>

  );
}

export default SkillsPage;