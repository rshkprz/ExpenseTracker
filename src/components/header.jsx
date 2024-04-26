import React from 'react'
import Logo from '../assets/logo.png'
import User from '../assets/user.png'
import FilterMenu from './filter';

export default function Header() {
    const user = {
        username: "Rashik Prajapati",
    };
  return (
    <div className='p-5 flex items-center gap-1'>
        <img src={Logo} alt="logo" width={50} />
        <h1 className='text-3xl font-semibold'>Expense Tracker</h1>
        <span className='fixed right-10 flex items-center'>
          <div className='mr-3'>
           <FilterMenu />
          </div>
          <button className='account flex items-center'>
            <img src={User} alt="user" width={30} />
            <h1 className='font-normal'>{user.username}</h1>
          </button>
        </span>
    </div>
  )
}
