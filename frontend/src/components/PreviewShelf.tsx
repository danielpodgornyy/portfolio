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
    const generatedTiles = [];

    if (inputData && inputData.length > 0) {
      // Makes sure to sort the input descending (newest data first)
      inputData.sort((a, b) => new Date(b.created).getTime() - new Date(a.created).getTime());
      inputData.forEach((data) => {
        generatedTiles.push(<NotificationTile key={data.name} inputData={data} />);
      });
      for (let i = 0; i < numTiles - inputData.length; i++) {
        generatedTiles.push(<EmptyNotificationTile key={`empty-${i}`} />);
      }
    } else {
      for (let i = 0; i < numTiles; i++) {
        generatedTiles.push(<EmptyNotificationTile key={`empty-${i}`} />);
      }
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
  const redirectLink = inputData.category == 'Project'
                       ? `/projects?name=${encodeURIComponent(inputData.name)}`
                       : `/blog?name=${encodeURIComponent(inputData.name)}`

  // Add more once decided
  let logo_path;
  switch(inputData.category) {
    case 'Project':
      logo_path = '/images/project.png'
      break;
    default:
      logo_path = '/images/article.png'
  }
  
  return (
    <Link to={redirectLink} className={home.tile}>
      <div className={home.logo}>
        <div className={home.imgContainer}>
          <img src={logo_path} className={home.tileImg} />
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
    <div className={home.emptyTile}>
      <div className={home.emptyImg}>
      </div>
    </div>
  )
}

export default PreviewShelf;
