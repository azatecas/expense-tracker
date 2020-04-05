import React from 'react';
import './App.css';
import TotalExpenses from './components/TotalExpenses';
import Expenses from './components/Expenses';
import Budget from './components/Budget';
import Available from './components/Available';
import Title from './components/Title';

function App() {
  return (
    <div className="App">

      <Title />
      <Expenses />
      <div className="math">
        <Budget />
        <TotalExpenses/>
        <Available />
      </div>    
    </div>
  );
}

export default App;
