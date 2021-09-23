import React from 'react'
import './App.css';
import { DataProvider } from './components/DataProvider'
import TableCountries from './components/TableCountries'

function App() {
  return (
    <DataProvider>
    <div className="App">
      <h1>Hello world</h1>
      <TableCountries />
    </div>
    </DataProvider>
  );
}

export default App;
