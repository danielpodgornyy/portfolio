import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

import api from '@/utils/api';
import TagBar from '@/components/TagBar';

import { Project, Status } from '@/types.js';
import projects from '@/styles/Projects.module.css';
import instance from '@/styles/Instance.module.css';

function ProjectPage() {
  const [searchParams] = useSearchParams();
  const [projectInfo, setProjectInfo] = useState<Project | null>(null);
  const [loadingStatus, setLoadingStatus] = useState<Status>('IDLE');

  useEffect(() => {
    async function pullProjectInfo() {
      try {
        const response = await api.get(`api/projects/${searchParams.get('name')}`);
        setProjectInfo(response.data);
        setLoadingStatus('SUCCESS');
      } catch (error) {
        console.error("Error loading project info");
        setLoadingStatus('FAILURE');
      }
    }
    pullProjectInfo();
  }, [searchParams]);

  return (
    <div className='center-content'>
      <div className={instance.instanceContainer}>
        <Link to='/projects' className={instance.backtrackLink}>
          <img src='/images/arrow.png' alt='Go back link' />
          Projects
        </Link>
        {loadingStatus === 'SUCCESS' ? (
          <>
            <div className={instance.header}>
              <div className={instance.headerTop}>
                <h1>{projectInfo.name}</h1>
                <h3>{projectInfo.created}</h3>
              </div>
              <p>{projectInfo.description}</p>
            </div>

            <img src='/images/project.png' className={instance.visual} alt='Project visual' />

            <div className={instance.instanceLinks}>
              {projectInfo.live && <a href={projectInfo.live}>Live</a>}
              <a href={projectInfo.source}>Source</a>
            </div>

            <div className={instance.content}>
              <h2>Background</h2>
              {parse(projectInfo.background)}
              <br />
              <h2>Features</h2>
              {parse(projectInfo.features)}
              <br />
              <h2>Main resources used</h2>
              {parse(projectInfo.technologies)}
            </div>
          </>
        ) : loadingStatus === 'FAILURE' ? (
          <p>ERROR: Could not load project info for {searchParams.get('name')}</p>
        ) : (
          <div className='loading-container'>
            <img src='/images/loading.svg' alt='Loading symbol' loading='lazy' />
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectPage;
