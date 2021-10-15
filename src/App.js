import React from 'react'
import './App.css';
import { DataProvider } from './components/DataProvider'
import TableCountries from './components/TableCountries'
import Header from './components/Header'

function App() {
  return (
    <DataProvider>
    <div className="App">
      <Header />
      <TableCountries />
    </div>
    </DataProvider>
  );
}

export default App;
