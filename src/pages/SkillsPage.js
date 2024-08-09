import React, {useEffect, useRef, useState} from 'react'
import SocialIcons from '../components/SocialIcons';
import '../css/skills.css';
import Button from '../components/Button';

const SkillsPage = () => {
    const ref = useRef(null);
    const [isIntersecting, setIsIntersecting] = useState(false)

    const callbackFonction = (entries) => {
        const [entry] = entries;
        setIsIntersecting(entry.isIntersecting)
         const query = ref.current.querySelectorAll('.line')
         if (entry.isIntersecting) {
            query.forEach((e) => {
                e.style.setProperty('--animation' , 'progress 1500ms ease-in 1');
            });
            return
        }
        query.forEach((e) => {
            e.style.setProperty('--animation' , 'none');
        });
    }
    const option = {
        root:null,
        rootMargin:'0px',
        threshold:0
    }
    
    useEffect(() => {
        const observer = new IntersectionObserver(callbackFonction, option)
        ref.current && observer.observe(ref.current)
        return () => {
            ref.current && observer.unobserve(ref.current)
        }
      }, [ref,option]);

  return (
        <section className="skills" id="skills">
        <div className="max-width">
            <h2 className="title">My skills</h2>
            <div className="skills-content">
                <div className="column left">
                    <div className="text">My creative skills & experiences.</div>
                    <p>My skills are HTML, CSS, JavaScript, Typescript, Tailwind Css, React JS and Node JS. I have full understanding of React hooks, 
                        reusable components, react router dom for navigation through pages. </p>
                    <p>My other skills are problem solving, Troupleshooting, Debugging, Team working and Punctuality</p>
                    <Button href="#" css={`
                        padding:10px 20px;
                        border-radius:10px;
                        font-size:15px;`}
                        >Read more</Button>
                </div>
                <div className="column right" ref={ref}>
                    <div className="bars">
                        <div className="info">
                            <span>HTML</span>
                            <span>90%</span>
                        </div>
                        <div className="line html"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>CSS</span>
                            <span>70%</span>
                        </div>
                        <div className="line css"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>JavaScript</span>
                            <span>60%</span>
                        </div>
                        <div className="line js"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>Java</span>
                            <span>50%</span>
                        </div>
                        <div className="line java"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>Python</span>
                            <span>70%</span>
                        </div>
                        <div className="line py"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>Ms Office (Excel, Word, PowerPoint)</span>
                            <span>60%</span>
                        </div>
                        <div className="line ms"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>MERN Stack</span>
                            <span>70%</span>
                        </div>
                        <div className="line mern"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>MySQL</span>
                            <span>60%</span>
                        </div>
                        <div className="line mysql"></div>
                    </div>
                </div>
            </div>
        </div>
        <SocialIcons />
    </section>

  );
}

export default SkillsPage;