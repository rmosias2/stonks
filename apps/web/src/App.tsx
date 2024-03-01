import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage, OnboardingAdvisorPage, OnboardingPage, OnboardingWalletPage } from './pages';
import { AdvisiorPage } from './pages/advisior';
import { LoginPage } from './pages/login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AdvisiorPage />} path='/advisiors' />
        <Route element={<HomePage />} path='/' />
        <Route path='onboarding'>
          <Route element={<OnboardingPage />} index />
          <Route element={<OnboardingAdvisorPage />} path='advisor' />
          <Route element={<OnboardingWalletPage />} path='wallet' />
        </Route>
        <Route element={<LoginPage />} path='/login' />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
