import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import BarMenu from '../components/barmenu/BarMenu'
import Home from '../components/home/Home'
import Loading from '../media/loading.gif'
import '../styles/style.css'

export default function App() {

  const settings = useSelector(state => state.settings)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('iniciated')) {
      setIsLoaded(true)
    } else {
      setTimeout(() => {
        setIsLoaded(true)
        localStorage.setItem('iniciated', true)
      }, 3500)
    }

  }, [])

  return (
    <div>
      {
        (isLoaded) ?
        <div>
          <BarMenu/>
          <Home/>
        </div> 
        :
        <div className='app-loading d-flex vw-100 vh-100 justify-content-center align-items-center'>
          <img className='app-loading-img' src={Loading} alt="loading"/>
        </div>
      } 
    </div>
  )
}
