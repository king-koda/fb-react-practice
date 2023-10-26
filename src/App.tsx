import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import { Pages } from './pages/Pages';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ChakraProvider>
    <React.StrictMode>
      <Pages />
    </React.StrictMode>
  </ChakraProvider>
);
