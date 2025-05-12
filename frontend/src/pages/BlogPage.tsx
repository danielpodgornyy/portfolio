import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import api from '@/utils/api'
import TagBar from '@/components/TagBar';
import { Post, Status } from '@/types.js'
import blog from '@/styles/Blog.module.css';
import instance from '@/styles/Instance.module.css';

function BlogPage() {
  const [searchParams] = useSearchParams();
  const [postInfo, setPostInfo] = useState<Post | null>(null);
  const [loadingStatus, setLoadingStatus] = useState<Status>('IDLE');

  useEffect(() => {
    async function pullPostInfo() {
      try {
        const response = await api.get(`api/blog/${searchParams.get('name')}`);
        setPostInfo(response.data);
        setLoadingStatus('SUCCESS');
      } catch (error) {
        console.error("Error loading blog post");
        setLoadingStatus('FAILURE');
      }
    }
    pullPostInfo();
  }, [searchParams]);

  return (
    <div className='center-content'>
      <div className={instance.instanceContainer}>
        <Link to='/blog' className={instance.backtrackLink}>
          <img src='/images/arrow.png' alt='Go back link' />
          Blog
        </Link>
        {loadingStatus === 'SUCCESS' ? (
          <>
            <div className={instance.header}>
              <div className={instance.headerTop}>
                <h1>{postInfo.name}</h1>
                <h3>{postInfo.created}</h3>
              </div>
            </div>
            <div className={instance.content}>
              {parse(postInfo.content)}
            </div>
          </>
        ) : loadingStatus === 'FAILURE' ? (
          <p>ERROR: Could not load post info for {searchParams.get('name')}</p>
        ) : (
          <div className='loading-container'>
            <img src='/images/loading.svg' alt='Loading symbol' loading='lazy' />
          </div>
        )}
      </div>
    </div>
  );
}

export default BlogPage;
