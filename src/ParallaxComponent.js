import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import './index.css';


const ParallaxComponent = () => {
    return (

        <div className="background">
  
        <Parallax pages={5}>
          <ParallaxLayer offset={0} speed={0.5} style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}>
            <p>Scroll down</p>
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
  
          <ParallaxLayer offset={1.5} speed={1.5}style={{
            display: 'flex',
            justifyContent: 'right',
            pointerEvents: 'none',
          }}>
            <div>
              <p>I'm not</p>
            </div>
          </ParallaxLayer>
  
          <ParallaxLayer offset={2.5} speed={1.5}style={{
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
    )
}
  export default ParallaxComponent;
  