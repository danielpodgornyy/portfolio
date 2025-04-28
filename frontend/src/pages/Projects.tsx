import  { useState } from 'react'
import { useSearchParams } from 'react-router';

import ProjectPage from '@/pages/ProjectPage'
import SectionHeader from '@/components/SectionHeader';
import ProjectGrid from '@/components/ProjectGrid';

import projects from '@/styles/Projects.module.css';

function Projects() {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className='center-content'>
      { searchParams.get('name') 
        ? <ProjectPage />
        : <div className={projects.projectsContainer}>
            <SectionHeader sectionName='Projects'/>
            <ProjectGrid />
          </div>
      }
    </div>
  )
}

export default Projects;
