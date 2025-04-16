import Shelf from '@/components/Shelf';

import '@/styles/home.css';


function Home() {
  return (

    <div className="center-content">
      <div className="home-container">
        <div className="split-container">
          <div className="name">
            <h1>Daniel Podgornyy</h1>
            <h3>Software Engineer</h3>
          </div>
          <Shelf numTiles={3}/>
        </div>
        <div className="split-container">
          <Shelf numTiles={4}/>
        </div>
      </div>
    </div>
  )
}

export default Home;
