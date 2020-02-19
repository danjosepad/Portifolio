import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes.jsx';

import './global.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}
