import './App.css';
import Card from './components/card';
import Header from './components/header';
import MenuBar from './components/menubar';
import { IncomeExpenseProvider } from './context/ApiContext';

function App() {
  return (
    <IncomeExpenseProvider>
      <div className='h-screen'>
        <Header />
        
        <div className='card flex flex-col sm:flex-row items-center justify-center gap-5'>
          <Card title="Income" />
          <Card title="Expense" />
        </div>
       
        <div className='menu-container mt-4'>
          <MenuBar />
        </div>
      </div>
    </IncomeExpenseProvider>
  );
}

export default App;
