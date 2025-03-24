import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import BarMenu from '../components/barmenu/BarMenu'
import Home from '../components/home/Home'
import Loading from '../media/loading.gif'
import '../styles/style.css'

export default function App() {

  const settings = useSelector(state => state.settings)

  return (
    <div>
      {
        <div>
          <BarMenu/>
          <Home/>
        </div> 
      } 
    </div>
  )
}
