import { Link } from 'react-router-dom';

const links = [
  { name: 'Home', href: '/'},
  { name: 'About me', href: '/aboutme'},
  { name: 'Experience', href: '/experience'},
  { name: 'Projects', href: '/project'},
  { name: 'Blog', href: '/blog'},
  { name: 'Contact me', href: '/contactme'}
]

const centerStyle: { [key: string]: string } = {
  display: "flex",
  justifyContent: 'center',
  width: "100%",
}

export default function Header() {

  function showKeybinds() {
    console.log('entered')

  }

  function hideKeybinds() {
    console.log('left')
  }

  return (
    <div style={centerStyle}>
      <header>
        {links.map((link) => {
          return (
              <Link key={link.name} to={link.href} className='link-button'>
                {link.name}
              </Link>
          )
        })}
        <div className='keybind-button' onMouseEnter={showKeybinds} onMouseLeave={hideKeybinds}>
          ?
        </div>
      </header>
    </div>
  )
}
