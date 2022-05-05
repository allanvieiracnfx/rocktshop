import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Routes from './routes';
import GlobalStyles from './styles/global';
import Header from './components/Header';
import { CartContextProvider } from "./context/CartContextProvider";

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <GlobalStyles />
        <Header />
        <Routes />
        <ToastContainer autoClose={3000} />
      </CartContextProvider>
    </BrowserRouter>
  );
};

export default App;
