import React from 'react';
// import {BrowserRouter, Switch, Route} from "react-router-dom";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import About from './pages/About';
import AddEdit from './pages/AddEdit';
import Home from './pages/Home';
import View from './pages/View';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <div className='APP'>
        <Header />
        <ToastContainer position="bottom-center" />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/add' element={<AddEdit/>} />
          <Route exact path='/update/:id' element={<AddEdit/>} />
          <Route exact path='/view/:id' element={<View/>} />
          <Route exact path='/about' element={<About/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
