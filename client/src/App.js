import { Routes, Route, Navigate } from 'react-router-dom'
import React, { useState } from 'react'

import Main from './views/Main';
// import LoginReg from './views/LoginReg'
import NewDream from './views/NewDream';
import OneDream from './views/OneDream'
import DreamsByUser from './views/DreamsByUser'
import LoginView from './views/LoginView'
import RegisterView from './views/RegisterView';

function App() {

  const [loggedInUser, setLoggedInUser] = useState(null)

  return (
    <div className='container mt-4'>
      <Routes>
        <Route path={'*'} element={<Navigate to={'/'} />} />
        <Route path={'/'} element={<Main loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />} />
        {/* <Route path={'/auth'} element={<LoginReg />} /> */}
        <Route path={'/login'} element={<LoginView />} />
        <Route path={'/register'} element={<RegisterView />} />
        <Route path={'/new/dream'} element={<NewDream loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />} />
        <Route path={'/dream/:id'} element={<OneDream loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />} />
        <Route path={'/dreams/:username'} element={<DreamsByUser loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />} />
      </Routes>
    </div>
  );
}

export default App;
