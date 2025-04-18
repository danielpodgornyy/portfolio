import ProjectGrid from '@/components/ProjectGrid';

import projects from '@/styles/Projects.module.css';

function Projects() {

  return (
    <div className='center-content'>
      <div className={projects.projectsContainer}>
        <div className={projects.projectsHeader}>
          <h1>Name</h1>
          <div className={projects.utilHeader}>
          Skills
          </div>
        </div>
      </div>
      <ProjectGrid />
    </div>
  )
}

export default Projects;
