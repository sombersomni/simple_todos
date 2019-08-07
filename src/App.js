import React, { useState } from 'react';
//components
import Todos from './components/Todos.jsx';
import TitleMenu from './components/TitleMenu.jsx';
import './App.css';
export default function App() {
  return (
    <div className='App'>
      <TitleMenu />
      <Todos />
    </div>
  );
}
