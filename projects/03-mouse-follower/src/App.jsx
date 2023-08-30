import { useEffect, useState } from 'react';

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    //console.log('useEffect', { enabled });

    const handleMove = (event) => {
      const { clientX, clientY } = event;
      //console.log('handleMove', clientX, clientY);
      setPosition({ x: clientX, y: clientY });
    };

    if (enabled) {
      window.addEventListener('pointermove', handleMove);
    }

    //  CLEAN UP
    return () => {
      window.removeEventListener('pointermove', handleMove);
    };
  }, [enabled]);

  return (
    <>
      <div
        style={{
          position: 'absolute',
          backgroundColor: '#09f',
          borderRadius: '50%',
          opacity: 0.8,
          pointerEvents: 'none',
          left: -20,
          top: -20,
          width: 40,
          height: 40,
          transform: `translate(${position.x}px, ${position.y}px)`,
          display: enabled ? 'block' : 'none',
        }}
      />
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Deactivate' : 'Activate'} follow cursor
      </button>
    </>
  );
};

function App() {
  return (
    <main>
      <FollowMouse />
    </main>
  );
}

export default App;
