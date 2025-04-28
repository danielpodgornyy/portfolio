import blog from '@/styles/Blog.module.css';

function BlogTiles() {
  
  return(
    <div className={blog.blogTiles}>
      <BlogTile />
      <BlogTile />
      <BlogTile />
      <BlogTile />
      <BlogTile />
      <BlogTile />
      <BlogTile />
      <BlogTile />
    </div>
  )
}

function BlogTile() {
  
  return (
    <div className={blog.blogTile}>
      <div className={blog.leftContainer}>
        <div className={blog.imgContainer}>
          <img src='/images/article.png'></img>
        </div>
        <h3 className={blog.blogTitle}>Blockchain Blasphemy and the Technological AntichristBlockchain Blasphemy and the Technological Antichrist</h3>
      </div>
      <div className={blog.rightContainer}>
        <div className={blog.timestamp}>
          09/12/25 
        </div>
      </div>
    </div>
  )
}

export default BlogTiles;
