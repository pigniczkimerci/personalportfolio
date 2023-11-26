import React, { useEffect, useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import './index.css';


const ParallaxComponent = () => {
  // eslint-disable-next-line no-undef
  const heroRef =  useRef(null);

  useEffect(() => {
    const updateMousePosition =  (ev) => {
      if(!heroRef.current) return;
      const {clientX, clientY} = ev;
      heroRef.current.style.setProperty('--x', `${clientX}px`)
      heroRef.current.style.setProperty('--y', `${clientY}px`)
    }
    window.addEventListener('mousemove', updateMousePosition);
    
    return () =>{
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])

  return (
    <>
      <style>{`
        .background {
          height: 100vh;
          width: 100%;
          background-image: radial-gradient(
            circle farthest-side at var(--x) var(--y),
            #2a2f42 0%,
            transparent 100%
          );
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}
      </style>
    <div ref={heroRef} className="background">
      <Parallax pages={5}>
        <ParallaxLayer offset={0} speed={0.5} style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          pointerEvents: 'none',
        }}>
          <div className="texts">
            <div id="hi">
              <p >Hi there!</p>
            </div>
            <div id="iam">
              <p>I'm a passionate frontend developer with a knack for crafting engaging user interfaces.</p>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 1, end: 3 }} style={{
          display: 'flex',
          justifyContent: 'left',
          pointerEvents: 'none',
        }}>
          <div>
            <p>I'm a sticky layer</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1.5} speed={1.5} style={{
          display: 'flex',
          justifyContent: 'right',
          pointerEvents: 'none',
        }}>
          <div>
            <p>I'm not</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2.5} speed={1.5} style={{
          display: 'flex',
          justifyContent: 'right',
          pointerEvents: 'none',
        }}>
          <div>
            <p>Neither am I</p>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
    </>
  )
}
export default ParallaxComponent;
