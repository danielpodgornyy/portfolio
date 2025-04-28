import home from '@/styles/Home.module.css';

interface NotificationShelfProps {
  numTiles: number;
};

function PreviewShelf({ numTiles }: NotificationShelfProps) {
  const tiles = [];

  for (let i = 0; i < numTiles; i++) {
    tiles.push(<NotificationTile key={i} />);
  }

  return (
    <div className={`container ${home.shelf}`}>
      <div className={home.shelfInfo}>
        <p className={home.shelfTitle}>What's new?</p>
      </div>
      <div className={home.tileContainer}>
        {tiles}
      </div>
    </div>
  );
}

function NotificationTile() {

  return (
    <div className={home.tile}>
      <div className={home.logo}>
        <div className={home.imgContainer}>
          <img src='/images/article.png' className={home.tileImg}></img>
        </div>
      </div>
      <div className={home.tileInfo}>
        <div className={home.tileTitle}>New Chat</div>
        <div className={home.tileDesc}>A multiroom chat application with a custom server and HTTP request sender and handler that allows for anonymous communication with others</div>
      </div>
    </div>
  )
}

export default PreviewShelf;

