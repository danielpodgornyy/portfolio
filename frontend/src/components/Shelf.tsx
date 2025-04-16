import Tile from '@/components/Tile';

type ShelfProps = {
  numTiles: number;
};

function Shelf({ numTiles }: ShelfProps) {
  const tiles = [];

  for (let i = 0; i < numTiles; i++) {
    tiles.push(<Tile key={i} />);
  }

  return (
    <div className='container shelf'>
      <div className='shelf-info'>
        <p className='shelf-title'>What's new?</p>
      </div>
      <div className='tile-container'>
        {tiles}
      </div>
    </div>
  );
}

export default Shelf;

