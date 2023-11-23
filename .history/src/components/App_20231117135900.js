import './App.css';
import {Routes, Route, Link} from "react-router-dom";
import { Header } from '../pages/Header';
import { Footer} from '../pages/Footer';
import { Main } from '../pages/Main';
import AboutCompany, { About, AboutMember } from '../pages/About';
import { Product } from '../pages/Product';
import { Frame } from '../pages/Frame';
import { Contact } from '../pages/Contact';
import { Fakeme } from '../pages/Fakeme';
import { LocaleProvider } from '../contexts/LocaleContext';

function App() {
  return (
    <LocaleProvider defaultValue={'ko'}>
    <div className='main'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Main></Main>}></Route>
        <Route path='/about' element={<About></About>}>
          <Route path='company' element={<AboutCompany></AboutCompany>}></Route>
          <Route path='member' element={<AboutMember></AboutMember>}></Route>
        </Route>
        <Route path='/product' element={<Product></Product>}></Route>
        <Route path='/frame' element={<Frame></Frame>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/fakeme' element={<Fakeme></Fakeme>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
    </LocaleProvider>
  );
}
export default App;