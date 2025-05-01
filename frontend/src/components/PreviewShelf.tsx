import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Preview } from '@/types';
import home from '@/styles/Home.module.css';

interface NotificationShelfProps {
  numTiles: number,
  title: string,
  inputData: Array<Preview> | null
};

function PreviewShelf({ numTiles, title, inputData }: NotificationShelfProps) {
  const [tiles, setTiles] = useState<React.ReactElement[]>([]);

  useEffect(() => {
    if (!inputData) return;

    const generatedTiles = [];

    inputData.forEach((data) => {
      generatedTiles.push(<NotificationTile key={data.name} inputData={data}/>);
    });

    for (let i = 0; i < numTiles - inputData.length; i++) {
      generatedTiles.push(<EmptyNotificationTile key={i}/>)
    }

    setTiles(generatedTiles);
  }, [inputData, numTiles]);

  return (
    <div className={`container ${home.shelf}`}>
      <div className={home.shelfInfo}>
        <p className={home.shelfTitle}>{title}</p>
      </div>
      <div className={home.tileContainer}>
        {tiles}
      </div>
    </div>
  );
}

interface NotificationTileProps {
  inputData: Preview
}

function NotificationTile({ inputData }: NotificationTileProps) {
  const redirectLink = inputData.category == 'project'
                       ? `/projects?name=${encodeURIComponent(inputData.name)}`
                       : `/blog?name=${encodeURIComponent(inputData.name)}`
  
  return (
    <Link to={redirectLink} className={home.tile}>
      <div className={home.logo}>
        <div className={home.imgContainer}>
          <img src='/images/article.png' className={home.tileImg} />
        </div>
      </div>
      <div className={home.tileInfo}>
        <div className={home.tileTitle}>{inputData.name}</div>
        <div className={home.tileDesc}>
          {inputData.description}
        </div>
      </div>
    </Link>
  );
}

function EmptyNotificationTile() {

  return (
    <div className={home.tile}>
      <div className={home.logo}>
        <div className={home.imgContainer}>
          <div className={home.tileImg}>
          </div>
        </div>
      </div>
      <div className={home.tileInfo}>
        <div className={home.tileTitle}></div>
        <div className={home.tileDesc}>
        </div>
      </div>
    </div>
  )
}

export default PreviewShelf;
