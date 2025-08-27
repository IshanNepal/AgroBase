import { Crop, Flower, LayoutGrid, Plus, Sun } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
   <header className='flex justify-between items-center m-4 border-b pb-4'>
    <div className="Main ">
        <div className="Title flex items-center gap-3">
            <Flower />
            <div className="Text">
                <h1 className='text-2xl font-bold'>AgroBase</h1>
                <span className='text-lg'>Agro Wiki</span>
            </div>
        </div>
    </div>
    <div className="Other flex gap-2 items-center ">
        <button className='bg-primary rounded-full p-2 hidden gap-2 items-center sm:flex'>
            <Plus size={30} className=''/>
            <span>Login</span>
        </button>
        <button className='text-accent'>
            <Sun />
        </button>
        <nav className="nav">
            <ul className='hidden sm:flex gap-6 bg-accent-content p-2 rounded-md'>
                <NavLink to={'#'} className={'p-2  rounded-md'}>{'Home'}</NavLink>
                <NavLink to={'#'} className={'p-2 rounded-md'}>{'Home'}</NavLink>
                <NavLink to={'#'} className={'p-2  rounded-md'}>{'Home'}</NavLink>
            </ul>
        </nav>
       <div className="nav sm:hidden block">
        <LayoutGrid />
       </div>
    </div>
   </header>
  )
}

export default Header