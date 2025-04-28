import PreviewShelf from '@/components/PreviewShelf';

import home from '@/styles/Home.module.css'


function Home() {
  return (

    <div className="center-content">
      <div className={home.homeContainer}>
        <div className={home.splitContainer}>
          <div className={home.name}>
            <h1>Daniel Podgornyy</h1>
            <h3>Software Engineer</h3>
          </div>
          <PreviewShelf numTiles={4}/>
        </div>
        <div className={home.splitContainer}>
          <PreviewShelf numTiles={5}/>
        </div>
      </div>
    </div>
  )
}

export default Home;
