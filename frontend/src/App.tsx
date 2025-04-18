import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Header from '@/components/Header';
import Home from '@/pages/Home';
import AboutMe from '@/pages/AboutMe';
import Experience from '@/pages/Experience';
import Projects from '@/pages/Projects';
import ErrorPage from '@/pages/ErrorPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/aboutme' element={<AboutMe />}/>
        <Route path='/experience' element={<Experience />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='*' element={<ErrorPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
