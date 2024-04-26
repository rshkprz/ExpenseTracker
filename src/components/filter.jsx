import React from 'react'
import Filter from '../assets/filter.png'
export default function FilterMenu() {
  return (
    <div className='justify-center'>
        <button className='flex items-center justify-center bg-slate-200 rounded-md p-1 hover:bg-slate-300'>
        <p className='text-md'>Filter: </p>
        <img src={Filter} alt="filter" width={20} /></button>
    </div>
  )
}
