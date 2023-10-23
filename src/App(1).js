import { useState } from 'react';
import './App.css';
import {Routes, Route, Link} from "react-router-dom";
import { Header } from './pages/Header';
import { Footer} from './pages/Footer';
import { Main } from './pages/Main';
import { About } from './pages/About';
import { Product } from './pages/Product';
import { Frame } from './pages/Frame';
import { Contact } from './pages/Contact';
import { Fakeme } from './pages/Fakeme';

function App() {
  return (
    <div className='main'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Main></Main>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/product' element={<Product></Product>}></Route>
        <Route path='/frame' element={<Frame></Frame>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/fakeme' element={<Fakeme></Fakeme>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}
export default App;