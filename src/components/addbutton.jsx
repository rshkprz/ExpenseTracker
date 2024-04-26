import React from 'react'
import Add from '../assets/add.png'
export default function AddButton() {
  return (

        <div className='text-center rounded-full bg-gradient-to-br from-orange-300 to-red-500'>
           <button>
            <img src={Add} alt="add" width={60} className='p-2'/>
           </button>
        </div>
      
  )
}
