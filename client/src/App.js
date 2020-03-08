import React from 'react';
import {Header} from './components/Header'
import {Balance} from './components/Balance'
import {IncomeExpenses} from './components/IncomeExpenses'
import './App.css';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

import {GlobalProvider} from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
    <div 
        style={{ minHeight: "100vh", display: 'flex', flexDirection: 'column' , alignItems: 'center', justifyContent: 'center', margin: '30px auto' }}>
      <Header />
      <div className="container flow-text">
          <IncomeExpenses/>
          <Balance/>
          <TransactionList/>
          <AddTransaction/>
      </div>

    </div>
    </GlobalProvider>
  );
}

export default App;
