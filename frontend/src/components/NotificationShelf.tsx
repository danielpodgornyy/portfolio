import NotificationTile from '@/components/NotificationTile';
import home from '@/styles/Home.module.css';

type NotificationShelfProps = {
  numTiles: number;
};

function NotificationShelf({ numTiles }: NotificationShelfProps) {
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

export default NotificationShelf;

