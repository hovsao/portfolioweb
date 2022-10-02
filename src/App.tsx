import React from 'react';
import logo from './logo.svg';
import './App.css';
import { css } from '@emotion/react'

function App() {
  return (
    <div css={frame1}>
      <p>hello misawa</p>
    </div>
  );
}

export default App;


const frame1 = css`
  height:40px;
  width:40px;
`