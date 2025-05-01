import  { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

import api from '@/utils/api'
import TagBar from '@/components/TagBar';

import { Post } from '@/types.js'
import blog from '@/styles/Blog.module.css';
import instance from '@/styles/Instance.module.css';

function BlogPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [postInfo, setPostInfo] = useState<Post | null>(null)

  useEffect(() => {
    async function pullPostInfoArray() {
      try {
        let response = await api.get(`api/blog/${searchParams.get('name')}`);
        setPostInfo(response.data);
      } catch (error) {
        console.error("Error loading blog post");
      }
    }
    pullPostInfoArray()
  }, [searchParams])

  return(
    <div className='center-content'>
      <div className={instance.instanceContainer}>
        <Link to='/blog' className={instance.backtrackLink}>
          <img src='images/arrow.png' alt='Go back link'></img>
          Blog
        </Link>
        { postInfo 
          ? <>
              <div className={instance.header}>
                <div className={instance.headerTop}>
                  <h1>{postInfo.name}</h1>
                  <h3>{postInfo.created}</h3>
                </div>
                <div className={instance.category}>{postInfo.category}</div>
              </div>
              <div className={instance.content}>
                {parse(postInfo.content)}
              </div>
            </>
          : <p>ERROR: Could not load post info for {searchParams.get('name')}</p>
        }
      </div>
    </div>
  )
}

export default BlogPage;
