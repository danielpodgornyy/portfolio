import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Keybinds from '@/components/Keybinds';
import KeyListener from '@/components/KeyListener';

const links = [
  { name: 'Home', href: '/'},
  { name: 'About me', href: '/aboutme'},
  { name: 'Experience', href: '/experience'},
  { name: 'Projects', href: '/projects'},
  { name: 'Blog', href: '/blog'},
  { name: 'Contact me', href: '/contactme'}
]

const centerStyle: { [key: string]: string } = {
  display: "flex",
  justifyContent: 'center',
  width: "100%",
}

function Header() {
  const location = useLocation();
  const [keybindsActive, setKeybindsActive] = useState(false);

  function showKeybinds() {
    setKeybindsActive(true)
  }

  function hideKeybinds() {
    setKeybindsActive(false)
  }

  return (
    <div style={centerStyle}>
      <header>
        {links.map((link) => {
          let style = (link.href == location.pathname) ? 'link-button-active' : 'link-button'
          return (
              <Link key={link.name} to={link.href} className={style}>
                {link.name}
              </Link>
          )
        })}

        <div className='keybind-button' onMouseEnter={showKeybinds} onMouseLeave={hideKeybinds}>
          ?
        </div>
      </header>
      <Keybinds keybindsActive={keybindsActive}/>
      <KeyListener />
    </div>
  )
}

export default Header;
