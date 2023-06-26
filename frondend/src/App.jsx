import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import Auth from './pages/Auth';

// import PrivateRoutes from './component/PrivateRoutes';
import Home from './pages/Home';
import EditProfile from './pages/EditProfile';
import Login from './component/Auth/Login';

function App() {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            fontSize: '1.8rem',
          },
        }}
      />
      <Routes>
        {/* <Route element={<PrivateRoutes/>}> */}
          <Route path="/" element={<Home />} />
          <Route path="/edit-profile" element={<EditProfile/>} />
        {/* </Route> */}
        <Route path="/auth" element={<Auth />} />
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </>
  );
}

export default App;