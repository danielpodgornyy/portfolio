type KeybindsProps = {
  keybindsActive: boolean;
};

function Keybinds({ keybindsActive }: KeybindsProps) {
  let keybindTiles = []

  for (let i = 1; i < 7; i++) {
    keybindTiles.push(<div key={i} className='keybind-tile'><p>{i}</p></div>)
  }

  keybindTiles.push(<div key='Empty' className='spacer'></div>)
  
  return (
    <div className={`keybinds ${keybindsActive ? 'slide-up' : 'slide-down'}`}>
      {keybindTiles}
    </div>
  )
}

export default Keybinds;
