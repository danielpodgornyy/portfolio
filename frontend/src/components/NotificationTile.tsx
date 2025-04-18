import home from '@/styles/Home.module.css'

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

export default NotificationTile;
