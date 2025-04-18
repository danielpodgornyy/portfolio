import NotificationShelf from '@/components/NotificationShelf';

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
          <NotificationShelf numTiles={4}/>
        </div>
        <div className={home.splitContainer}>
          <NotificationShelf numTiles={5}/>
        </div>
      </div>
    </div>
  )
}

export default Home;
