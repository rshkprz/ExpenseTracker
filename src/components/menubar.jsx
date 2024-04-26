import React, { useState } from "react";
import AddButton from "./addbutton";
import Income from "./income";
import Expense from "./expense";

export default function MenuBar() {
  const [active, setActive] = useState("Income");
  const incomeData = [{
      topic: "Salary",
      amount: "14000",
    },
    {
      topic: "Freelance",
      amount: "12000",
    },
  ];
  const expenseData = [{
      topic: "tuition",
      amount: "1000",
    },
    {
      topic: "Food",
      amount: "170",
    },
  ];
  return (
    <>
    <div className="flex justify-center">
      <div className="flex items-center gap-2 w-auto bg-slate-100 rounded-full">
        <button onClick={() => setActive("Income")} className={`mx-2 px-7 py-3 text-center ${active === "Income" ? "bg-slate-300" : "bg-slate-100"} text-2xl rounded-full sm:rounded-l-full`}>Income</button>
        <AddButton />
        <button onClick={() => setActive("Expense")} className={`mx-2 px-7 py-3 text-center ${active === "Expense" ? "bg-slate-300" : "bg-slate-100"} text-2xl rounded-full sm:rounded-r-full`}>Expense</button>
      </div>
      <div>
      </div>
    </div>
    <div className="m-5">
      {active === 'Income' ? <Income data={incomeData} /> : <Expense data={expenseData}/>}
    </div>
      </>
    );
}
