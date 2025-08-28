import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header'
import { useState, useEffect } from 'react'

const Layout = () => {
      const [theme, setTheme ] = useState('night')

    useEffect(() => {
        document.documentElement.setAttribute( 'data-theme' ,theme)
    } 
    ,[theme])

    const handletheme = () => {
       setTheme(prev => (prev === "light"? "night":"light"))
    }
  return (
    <>
        <Header toggletheme={() => handletheme()}/>
        <Outlet />
    </>
  )
}

export default Layout