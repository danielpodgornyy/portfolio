import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '@/utils/api';

import { SlimProject, Status } from '@/types.js'
import projects from '@/styles/Projects.module.css';

function ProjectGrid() {
  const [projectsArray, setProjectsArray] = useState<Array<SlimProject> | null>(null);
  const [loadingStatus, setLoadingStatus] = useState<Status>('IDLE');
  useEffect(() => {
    async function pullProjectsArray() {
      try {
        let response = await api.get('api/projects');
        setProjectsArray(response.data);
        setLoadingStatus('SUCCESS');
      } catch (error) {
        console.error("Error loading projects array");
        setLoadingStatus('FAILURE');
      }
    }
    pullProjectsArray()
  }, []) 

  return (
    <>
      {loadingStatus === 'SUCCESS' ? (
        <div className={projects.projectGrid}>
          {projectsArray?.map((project) => (
            <ProjectTile key={project.name} project={project} />
          ))}
        </div>
      ) : loadingStatus === 'FAILURE' ? (
        <p>ERROR: Could not load projects array</p>
      ) : (
        <div className='loading-container'>
          <img src={'images/loading.svg'} alt='Loading symbol' loading='lazy' />
        </div>
      )}
    </>
  );

}

interface ProjectTileProps {
  project: SlimProject;
}

function ProjectTile({ project }: ProjectTileProps) {
  return (
    <Link to={`/projects?name=${encodeURIComponent(project.name)}`} className={projects.projectTile}>
      <img src={project.image_path} alt={project.image_alt} loading='lazy'></img>
      <div className={projects.projectInfo}>
        <h3>{project.name}</h3>
        <p> {project.description}</p>
      </div>
    </Link>
  )
}

export default ProjectGrid;
