import React, { useContext } from 'react';
import { IncomeExpenseContext } from '../context/ApiContext';

export default function Card({ title }) {
  const { monthlyIncome } = useContext(IncomeExpenseContext);
  return (
    <div className={`relative rounded-lg w-72 h-24 bg-gradient-to-r ${title === "Income" ? "from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%" : "from-indigo-500 via-purple-500 to-pink-500"}`}>
      <div className='relative flex justify-between p-3'>
        <p className='text-xl text-white'>{title}</p>
        <p className='text-md text-zinc-300'>{monthlyIncome.monthName}</p>
      </div>

      <span className='absolute right-4'>
        <p className='text-white text-xl'>Rs. {title === "Income" ? monthlyIncome.totalIncome : monthlyIncome.totalExpense}</p>
      </span>
    </div>
  );
}
