import React, { useState } from 'react';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckCircle, faCircle, faBan, faTimesCircle } from '@fortawesome/pro-light-svg-icons'
import { faClipboardListCheck, faPencil } from '@fortawesome/pro-duotone-svg-icons';
//components
import Todos from './components/Todos.jsx';
import TitleMenu from './components/TitleMenu.jsx';

import './App.css';

library.add(
  faCheckCircle, 
  faCircle, 
  faBan, 
  faTimesCircle,
  faClipboardListCheck,
  faPencil
);

export default function App() {
  return (
    <div className='App'>
        <TitleMenu />
        <Todos />
    </div>
  );
}
