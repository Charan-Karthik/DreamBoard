import { Routes, Route, Navigate } from 'react-router-dom'
// import { useState } from 'react'

import Main from './views/Main';

function App() {


  return (
    <div>
      <Routes>
        <Route path={'*'} element={<Navigate to={'/'} />} />
        <Route path={'/'} element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
