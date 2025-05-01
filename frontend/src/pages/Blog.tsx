import { useSearchParams } from 'react-router-dom';

import BlogPage from '@/pages/BlogPage.js'
import SectionHeader from '@/components/SectionHeader';
import BlogTiles from '@/components/BlogTiles';

import blog from '@/styles/Blog.module.css';

function Blog() {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className='center-content'>
      { searchParams.get('name')
        ? <BlogPage/>
        : <div className={blog.blogContainer}>
            <SectionHeader sectionName='Blog'/>
            <BlogTiles />
          </div>
      }
    </div>
  )
}

export default Blog;
