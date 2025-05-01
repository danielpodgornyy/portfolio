import { useState, useEffect } from 'react';

const centerStyle: { [key: string]: string } = {
  display: "flex",
  justifyContent: 'center',
  width: "100%",
}

export default function Footer () {
  const [keybindsActive, setKeybindsActive] = useState(false);

  function showKeybinds() {
    setKeybindsActive(true)
  }

  function hideKeybinds() {
    setKeybindsActive(false)
  }

  return (
    <footer style={centerStyle}>
      © 2025 Daniel Podgornyy. Open source under the MIT License.
    </footer>
  )
}
