import  { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

import api from '@/utils/api'
import TagBar from '@/components/TagBar';

import projects from '@/styles/Projects.module.css';
import instance from '@/styles/Instance.module.css';

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

function ProjectPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [projectInfo, setProjectInfo] = useState<Project | null>(null)

  useEffect(() => {
    async function pullProjectsArray() {
      try {
        let response = await api.get(`api/projects/${searchParams.get('name')}`);
        setProjectInfo(response.data);
      } catch (error) {
        console.error("Error loading projects array");
      }
    }
    pullProjectsArray()
  }, [searchParams])

  return(
    <div className='center-content'>
      <div className={instance.instanceContainer}>
        <Link to='/projects' className={instance.backtrackLink}>
          <img src='images/arrow.png' alt='Go back link'></img>
          Projects
        </Link>
        { projectInfo 

          ? <>
              <div className={instance.header}>
                <h1>{projectInfo.name}</h1>
                <p>{projectInfo.desc}</p>
              </div>
              <img src='/images/project.png' className={instance.visual}></img>
              <div className={instance.instanceLinks}>
                <button>Live</button>
                <button>Source</button>
              </div>
              <div className={instance.content}>
                <h2>Background</h2>
                {parse(projectInfo.background)}
                <br/>
                <h2>Features</h2>
                {parse(projectInfo.features)}
                <br/>
                <h2>Technologies/Languages used</h2>
                {parse(projectInfo.technologies)}
              </div>
            </>
          : <p>ERROR: Could not load project info for {searchParams.get('name')}</p>
        }
      </div>
    </div>
  )
}

export default ProjectPage;
