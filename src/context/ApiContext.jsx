import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const IncomeExpenseContext = React.createContext();

export const IncomeExpenseProvider = ({ children }) => {
  console.log("Hello Mah yah xa");
  const [monthlyIncome, setMonthlyIncome] = useState([]);
  const url = "http://localhost:3000/api/MonthlyEarning"; 

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setMonthlyIncome(response.data); 
      console.log('Response data:', response.data);
    } catch(error) {
      console.error('Error:', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []); 

  return (
    <IncomeExpenseContext.Provider
      value={{
        monthlyIncome 
      }}
    >
      {children}
    </IncomeExpenseContext.Provider>
  );
};
