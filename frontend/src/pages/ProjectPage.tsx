import  { useState } from 'react'
import { useSearchParams, Link } from 'react-router';

import TagBar from '@/components/TagBar';

import projects from '@/styles/Projects.module.css';
import instance from '@/styles/Instance.module.css';

function ProjectPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  return(
    <div className='center-content'>
      <div className={instance.instanceContainer}>
        <Link to='/projects' className={instance.backtrackLink}>
          <img src='images/arrow.png' alt='Go back link'></img>
          Projects
        </Link>
        <div className={instance.header}>
          <h1>Multi-room chat application</h1>
          <p>Netman is an application that is meant to show off many  networking concepts through a collection of mini-to-medium sized  projects. There is currently only one project implemented: the multiroom chat application</p>
        </div>
        <img src='/images/project.png' className={instance.visual}></img>
        <div className={instance.instanceLinks}>
          <button>Live</button>
          <button>Source</button>
        </div>
        <div className={instance.content}>
          <h2>Background</h2>
          <p></p>
          <h2>Features</h2>
          <p></p>
          <h2>Technologies/Languages used</h2>
          <p></p>
        </div>
      </div>
    </div>
  )
}

export default ProjectPage;
