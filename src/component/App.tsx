import React from 'react';
import '../App.css';
// emotion今回使わない
import { css } from '@emotion/css'//後で消す
import { Service } from './Service';
import { Works } from './Works';
import { About } from './About';
import { Footer } from './Footer';
import { MainVisual } from './MainVisual';


function App() {
  return (
    <div className={frame0}>
      <div className="bg-red-600 xl:pc ">
        <p>navigator position_absolute</p>
      </div>
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

const Contents = css`
  display:flex;
  flex-direction:column;
`

// const MainVisual = css`
//   height:720px;
//   width:1440px;
//   background-color:blue;
// `

const ServiceComponent = css`
`
const cardsComponent = css`
  background-color:blue;
`

const footer = css`
`