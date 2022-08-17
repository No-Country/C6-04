import React from 'react'
import CategoriesContainer from './CategoriesContainer'
import logoPersons from '../assets/Pictures/peeps.svg'
import logo from '../assets/Pictures/logo.svg'

const Footer = () => {
  return (
    <div className='min-h-screen w-full max-w-full bg-main-blue flex justify-start items-start flex-col'>
        <CategoriesContainer/>
        <div className='flex justify-around items-start  w-full max-w-full pt-20   ' >
            <div className='flex justify-start items-start flex-col gap-5'>
                <h4 className='text-white text-2xl font-bold'>ACERCA DE</h4>
                <h4 className='text-white text-2xl font-bold'>SOBRE NOSOTROS</h4>
                <h4 className='text-white text-2xl font-bold'>EQUIPO</h4>
            </div>
            <img src={logoPersons} alt="" />
            <img src={logo} className='self-end' alt="" />
        </div>
    </div>
  )
}

export default Footer