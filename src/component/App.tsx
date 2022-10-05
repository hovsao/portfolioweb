import React from 'react';
import '../App.css';
// emotion今回使わない
import { css } from '@emotion/css'
import { ServiceItem } from './ServiceItem';

function App() {
  return (
    <div className={frame0}>
      <div className="bg-red-600 xl:pc ">
        <p>navigator position_absolute</p>
      </div>
      <div className={contentsContainer}>
        <div className=" flex flex-col space-y-40">
          <div className=" bg-red-400 bg-img-MV bg-no-repeat h-px-720 bg-contain xl:pc ">
            <p>contents</p>
          </div>
          <div className= " bg-gray-500">
            <div className='flex flex-col space-y-16 w-fit'>
              <div className={ServiceComponent}>
                <p>Service</p>
              </div>
              <div className={`flex flex-col space-x-16 ${cardsComponent}`}>
                <ServiceItem></ServiceItem>
                {/* <div className=''></div>
                <p>card</p>
                <p>card</p>
                <p>card</p> */}
              </div>
            </div>
          </div>
          <div className= "bg-red-300">
            <p>Works</p>
          </div>
          <div className=" bg-yellow-700">
            <p>About</p>
          </div>
        </div>
        <div className="bg-green-600">
          <p>footer</p>
        </div>
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

const MainVisual = css`
  height:720px;
  width:1440px;
  background-color:blue;
`

const Service = css`
`
const ServiceComponent = css`
`
const cardsComponent = css`
  background-color:blue;
`

const Works = css`
`

const About = css`
`

const footer = css`
`