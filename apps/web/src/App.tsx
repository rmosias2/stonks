import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AdvisiorPage } from './pages/advisior';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AdvisiorPage />} path='/' />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
