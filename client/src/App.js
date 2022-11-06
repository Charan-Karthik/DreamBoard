import { Routes, Route, Navigate } from 'react-router-dom'
// import { useState } from 'react'

import Main from './views/Main';
import LoginReg from './views/LoginReg'
import NewDream from './views/NewDream';

function App() {


  return (
    <div className='container mt-4'>
      <Routes>
        <Route path={'*'} element={<Navigate to={'/'} />} />
        <Route path={'/'} element={<Main />} />
        <Route path={'/auth'} element={<LoginReg />} />
        <Route path={'/new/dream'} element={<NewDream />} />
      </Routes>
    </div>
  );
}

export default App;
