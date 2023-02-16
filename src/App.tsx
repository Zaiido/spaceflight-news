import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import NewsSection from './components/NewsSection';
import NewsDetails from './components/NewsDetails';

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route element={<NewsSection />} path="/" />
        <Route element={<NewsDetails />} path="/details/:id" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
