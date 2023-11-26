import React, { useEffect, useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import './index.css';
import DonutChart from 'react-donut-chart';

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
      <Parallax pages={6}>
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
      <ParallaxLayer offset={1} speed={0.5} style={{
          display: 'flex',
          justifyContent: 'right',
          pointerEvents: 'none',
        }}>
          <div className='aboutme'>
            <p> My passion for computer graphics and web development began during my time in high school, so I decided to continue my studies in this field. During my studies, I have placed special emphasis on learning web technologies.</p>
          </div>
      </ParallaxLayer>
      <ParallaxLayer sticky={{ start: 2, end: 4 }} style={{
          display: 'flex',
          justifyContent: 'left',
          pointerEvents: 'none',
          paddingLeft: '200px'
        }}>
          <div className='skills'>
            <p>Skills:</p>
          </div>
      </ParallaxLayer>
      <ParallaxLayer sticky={{ start: 3, end: 4 }} style={{
          display: 'flex',
          justifyContent: 'left',
          pointerEvents: 'none',
          paddingLeft: '200px',
          paddingTop: '100px'
        }}>
          {/*
          <div className='skills'>
            <p>HTML, CSS</p>
          </div>
          */}
          <DonutChart
          data={[
            {
              label: 'HTML',
              value: 95,
              fill: "#123456",
            },
            {
              label: '',
              value: 5,
              isEmpty: true,
            },
          ]}
        />;
      </ParallaxLayer>
        <ParallaxLayer offset={4} speed={1.5} style={{
          display: 'flex',
          justifyContent: 'center',
          pointerEvents: 'none',
        }}>
          <div>
            <p>I'm not</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={5} speed={1.5} style={{
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
