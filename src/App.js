import React from 'react';
import {Header} from './components/Header';
import {Balance} from './components/Balance';
import {IncomeExpenses} from './components/IncomeExpenses';
import {TransactionList} from './components/TransactionList';
import './App.css';
import {AddTransaction} from './components/AddTransaction';

import {GlobalProvider} from "./context/GlobalState";


function App() {
  return (
    <div>
    <Header />
    <div className="container">
      <Balance />
      <IncomeExpenses /> 
      < TransactionList />
      < AddTransaction />
    </div>
    </div>
  );
}

export default App;
