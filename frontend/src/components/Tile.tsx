function Tile() {

  return (
    <div className='tile'>
      <div className='logo'>
        <div className='img-container'>
          <img src='/images/article.png'></img>
        </div>
      </div>
      <div className='tile-info'>
        <div className='tile-title'>New Chat</div>
        <div className='tile-desc'>A multiroom chat application with a custom server and HTTP request sender and handler that allows for anonymous communication with others</div>
      </div>
    </div>
  )
}

export default Tile;
