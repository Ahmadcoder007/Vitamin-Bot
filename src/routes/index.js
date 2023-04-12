// import logo from './logo.svg';
// import { Route, Router, useLocation, Navigate, Routes } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import AuthRouter from './auth/Authroute';
import Casual from './casual/Casualrouse';
import { useSelector } from 'react-redux';

function App() {
  // const {authenticate, setAuthenticate} = useState(true);
  const credential = useSelector(state => state.general.credential)
  return (
    <>
      {/* {credential ? <AuthRouter /> : <Casual />} */}
      <AuthRouter />
      <Casual />
    </>
  );
}

export default App;
