import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function KeyListener() {
  const navigate = useNavigate();

  useEffect(() => {
    function handleKeyDown(e) {
      console.log(e.key);
      switch(e.key) {
        case '1':
          navigate('/');
          break;
        case '2':
          navigate('/aboutme');
          break;
        case '3':
          navigate('/experience');
          break;
        case '4':
          navigate('/projects');
          break;
        case '5':
          navigate('/blog');
          break;
        case '6':
          navigate('/contactme');
          break;
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }

  })

  return (
    <></>
  )
}

export default KeyListener;
