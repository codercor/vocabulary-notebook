import React, { } from 'react'
import AppBar from './components/common/AppBar';
import { Container } from '@mui/material';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
//page imports
import Home from './views/Home';
import Application from './views/Application';
import Login from './views/Login';


export default function App() {
  return (
    <div className="container" >
      <BrowserRouter>
        <AppBar />

        <Container maxWidth="md">
          <Routes>
            <Route path="/application" element={<Application />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Container>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
