import React from 'react'

export default function Expense({data}) {
  return (
     <div className='flex justify-center'>
        <div className='w-[39rem] bg-slate-100 h-auto'>
            <div className="flex justify-between bg-slate-400 rounded-md font-semibold text-xl px-5 py-2">
                <p>Title</p>
                <p>Amount</p>
            </div>
        {
            data.map((item, index)=>{
                return (
                    <div key={index} className='flex items-center justify-between bg-white rounded-md m-3 font-medium text-base p-2'>
                        <p>{item.topic}</p>
                        <p>{item.amount}</p>
                    </div>
                )    
            })
        }
    </div>
    </div>
  )
}
