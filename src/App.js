import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Motion, spring, StaggeredMotion} from 'react-motion';

function App() {
  return (
    <>
    <div className="App">
    <StaggeredMotion
    defaultStyles={[{h: 0}, {h: 0}, {h: 0}]}
    styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {
      return i === 0
        ? {h: spring(100)}
        : {h: spring(prevInterpolatedStyles[i - 1].h)}
    })}>
    {interpolatingStyles =>
      <div>
        {interpolatingStyles.map((style, i) =>
          <div key={i} style={{border: '1px solid', height: style.h}}>
            <Motion defaultStyle={{x: 0}} style={{x: spring(10000000)}}>
              {value => <div>{(value.x * value.x)}</div>}
            </Motion>
          </div>)
        }
      </div>
    }
  </StaggeredMotion>
    </div>
    </>
  );
}

export default App;
