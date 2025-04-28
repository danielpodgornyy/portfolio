import SectionHeader from '@/components/SectionHeader';
import BlogTiles from '@/components/BlogTiles';

import blog from '@/styles/Blog.module.css';

function Projects() {

  return (
    <div className='center-content'>
      <div className={blog.blogContainer}>
        <SectionHeader sectionName='Blog'/>
        <BlogTiles />
      </div>
    </div>
  )
}

export default Projects;
