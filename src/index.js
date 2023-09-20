import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom'
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux";
import { registrationSlice } from './registration/Slice/Registration';
import { ChakraProvider } from '@chakra-ui/react';


import './index.css';
import App from './App';

export const store = configureStore({
    reducer : {
      registration : registrationSlice.reducer
    }
   
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router >
      <ChakraProvider>
        <App />
     </ChakraProvider>
    </Router>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
