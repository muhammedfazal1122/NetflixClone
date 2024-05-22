import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import './App.css'
import { Action,Originals } from './urls'
import RowPost from './Components/RowPost/RowPost'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <RowPost urls={Originals} title = 'Netflix Originals' />
      <RowPost urls={Action} isSmall title = 'Action'/>
    </div>
  )
}

export default App