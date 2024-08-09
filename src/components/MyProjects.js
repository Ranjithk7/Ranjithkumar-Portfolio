import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import projects from '../pages/project-content';
import Button from './Button';

const MyProjects = () => {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      {projects.map(project => (
        <SwiperSlide>
          <div className="portfolio__content grid">
            <img src={project.img} className="portfolio__img" />
              <div className="portfolio__data">
                <h3 className="portfolio__title">
                  {project.title}
                </h3>
                <p className="portfolio__description">
                  {project.desc}
                </p>
                <Button
                target="_blank"
                href={project.repo}
                css={`
                padding:10px 20px;
                border-radius:10px;
                font-size:15px;`}
                >
                  GitHub Repository
                  <i className="uil uil-external-link-alt button__icon"></i>
                </Button>
                {
                  project.live ? 
                  <Button
                    target="_blank"
                    href={project.live}
                    css={`
                    margin-left:10px;
                    padding:10px 20px;
                    border-radius:10px;
                    font-size:15px;`}
                  >
                    See Live
                    <i className="uil uil-external-link-alt button__icon"></i>
                  </Button>
                  : null
                }
              </div>
            </div> 
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default MyProjects