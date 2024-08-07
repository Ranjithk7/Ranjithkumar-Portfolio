import React from 'react';
import SocialIcons from '../components/SocialIcons';
import '../css/project.css'
import MyProjects from '../components/MyProjects';

const ProjectPage = () => {
  return (
    <section className="projects" id="projects">
        <div className="max-width">
          <h2 className="title">My Personal Projects</h2>
          <MyProjects/>
        </div>
        <SocialIcons />
      </section>
  )
}

export default ProjectPage