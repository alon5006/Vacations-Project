import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/LayoutSection/Layout/Layout';
import Home from './components/LayoutSection/Home/Home';
import Login from './components/AuthSection/Login/Login';
import Register from './components/AuthSection/Register/Register';
import AddVacation from './components/AdminSection/AddVacation';
import EditVacation from './components/AdminSection/EditVacation';
import AdminCharts from './components/AdminSection/AdminCharts';







function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='login' element={<Login />} />
              <Route path='register' element={<Register />} />
              <Route path='addvacation' element={<AddVacation />} />
              <Route path='editvacation' element={<EditVacation />} />
              <Route path='admincharts' element={<AdminCharts />} />
            </Route>
          </Routes>
        </BrowserRouter>

    </div>
  )
}

export default App;
