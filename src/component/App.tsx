import React from 'react';
import '../App.css';
// emotion今回使わない
import { css } from '@emotion/css'
import { ServiceList } from './ServiceList';

function App() {
  return (
    <div className={frame0}>
      <div className="bg-red-600 xl:pc ">
        <p>navigator position_absolute</p>
      </div>
      <div className={contentsContainer}>
        <div className=" flex flex-col space-y-40 items-center">
          <div className=" bg-red-400 bg-img-MV bg-no-repeat h-px-720 bg-contain w-pc">
            <p>contents</p>
          </div>
          <div className= " bg-gray-500 ">
            <div className='flex flex-col space-y-16 w-fit'>
              <div className={`flex flex-col items-center ${ServiceComponent}`}>
                <div className=' font-sans text-5xl font-bold'>Service</div>
                <div className=' font-sans text-base text-green-400'>サービス</div>
              </div>
              <div className={`flex flex-row space-x-16 ${cardsComponent}`}>
                <ServiceList />
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