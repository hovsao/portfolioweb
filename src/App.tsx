import React from 'react';
import './App.css';
// emotion今回使わない
import { css } from '@emotion/css'

function App() {
  return (
    <div className={frame0}>
      <div className="bg-red-600 mb-20 1.5xl:w-misawa ">
        <p>navigator</p>
      </div>
      <div className={contentsContainer}>
        <div className={Contents}>
          <div className=" bg-blue-600 md">
            <p>aaa</p>
          </div>
          <div className={Service}></div>
          <div className={Works}></div>
          <div className={About}></div>
        </div>
        <div className={footer}></div>
      </div>
    </div>
  );
}

export default App;

const frame0 = css`
`

const frame1_nav = css`
  height:100px;
  width:1440px;
  background-color:red;
`
const contentsContainer = css`
`

const Contents = css`
  display:flex;
  flex-direction:column;
`

const MainVisual = css`
  height:720px;
  width:1440px;
  background-color:blue;
`

const Service = css`
`

const Works = css`
`

const About = css`
`

const footer = css`
`