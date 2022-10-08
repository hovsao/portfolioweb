import React from 'react';
import '../App.css';
// emotion今回使わない
import { css } from '@emotion/css'//後で消す
import { Service } from './Service';
import { Works } from './Works';
import { About } from './About';
import { Footer } from './Footer';
import { MainVisual } from './MainVisual';
import { Header } from './Header';


function App() {
  return (
    <div className={frame0}>
      <Header />
      <div className={contentsContainer}>
        <div className=" flex flex-col space-y-40 items-center">
          <MainVisual />
          <Service />
          <Works />
          <About />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;

const frame0 = css`
`

const contentsContainer = css`
`
