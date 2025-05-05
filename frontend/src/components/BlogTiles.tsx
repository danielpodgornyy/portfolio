import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '@/utils/api';

import { SlimPost, Status } from '@/types.js'
import blog from '@/styles/Blog.module.css';

function BlogTiles() {
  const [postInfoArray, setPostInfoArray] = useState<Array<SlimPost> | null>(null);
  const [loadingStatus, setLoadingStatus] = useState<Status>('IDLE');

  useEffect(() => {
    async function pullPostInfoArray() {
      try {
        let response = await api.get('api/blog');
        setPostInfoArray(response.data);
        setLoadingStatus('SUCCESS');
      } catch (error) {
        console.error("Error loading post info array");
        setLoadingStatus('FAILURE');
      }
    }
    pullPostInfoArray()
  }, [])

  return (
    <>
      {loadingStatus === 'SUCCESS' ? (
        <div className={blog.blogTiles}>
          {postInfoArray?.map((postInfo) => (
            <BlogTile key={postInfo.name} postInfo={postInfo} />
          ))}
        </div>
      ) : loadingStatus === 'FAILURE' ? (
        <p>ERROR: Could not load blog</p>
      ) : (
        <div className='loading-container'>
          <img src={'images/loading.svg'} alt='Loading symbol' loading='lazy' />
        </div>
      )}
    </>
  );
}

interface BlogTileProps {
  postInfo: SlimPost
}

function BlogTile({ postInfo }: BlogTileProps) {
  
  return (
    <Link to={`/blog?name=${encodeURIComponent(postInfo.name)}`} className={blog.blogTile}>
      <div className={blog.leftContainer}>
        <div className={blog.imgContainer}>
          <img src='/images/article.png'></img>
        </div>
        <h3 className={blog.blogTitle}>{postInfo.name}</h3>
      </div>
      <div className={blog.rightContainer}>
        <div className={blog.timestamp}>{postInfo.created}</div>
      </div>
    </Link>
  )
}

export default BlogTiles;
