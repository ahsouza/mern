import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import CheckoutImovel from './template/checkout/Checkout';
import AppBarComponent from './components/AppBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <AppBarComponent/>
      <CheckoutImovel/>
    </div>
  );
}

export default App;
