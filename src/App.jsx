import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Cube from './ThreeComponent'


import CanvasAnim from './ThreeFiber'

import BookItem from './BookItem'

import './App.css'


const list = [
  {"isbn": "1473537800"},
  {"isbn": "0061876720"},
  {"isbn": "0735637962"},
  {"isbn": "1448128625"},
  {"isbn": "0679640037"}
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='overall'>
        <div className='title bar'>
          DN
        </div>
        <div className='main'>
          <div className='left window'>
            <div className='title'>bookshelf</div>
            <div className='list'>
              {list.map((value) => {
                return <BookItem isbn={value.isbn}/>
              })}
            </div>
          </div>

          <div className='right window'>
            <CanvasAnim nOfItems={list.length}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
