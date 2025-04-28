import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '@/utils/api';
import TagBar from '@/components/TagBar';

import projects from '@/styles/Projects.module.css';

interface Project {
  name: string,
  image_path: string,
  image_alt: string,
  desc: string,
  background: string,
  features: string
  technologies: string
  source: string,
  live: string
}

function ProjectGrid() {
  const [projectsArray, setProjectsArray] = useState<Array<Project> | null>(null);
  useEffect(() => {
    async function pullProjectsArray() {
      try {
        let response = await api.get('api/projects');
        setProjectsArray(response.data);
      } catch (error) {
        console.error("Error loading projects array");
      }
    }
    pullProjectsArray()
  }, []) 

  return (
    <div className={projects.projectGrid}>
      {projectsArray 
        ? projectsArray.map((project) => (
            <ProjectTile key={project.name} project={project} />
          ))
        : <p>ERROR: Could not load projects array</p>
      }
    </div>
  )
}

interface ProjectTileProps {
  project: Project;
}

function ProjectTile({ project }: ProjectTileProps) {
  return (
    <Link to={`/projects?name=${project.name}`}className={projects.projectTile}>
      <img src={project.image_path} alt={project.image_alt} loading="lazy"></img>
      <div className={projects.projectInfo}>
        <h3>{project.name}</h3>
        <p>{project.desc}</p>
      </div>
    </Link>
  )
}

export default ProjectGrid;
