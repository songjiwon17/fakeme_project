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
import NotFoundPage from '../pages/NotFoundPage';

function App() {
  return (
    <LocaleProvider defaultValue={'ko'}>
    <div className='main'>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/about' element={<About />}>
          <Route path='company' element={<AboutCompany />} />
          <Route path='member' element={<AboutMember />} />
        </Route>
        <Route path='/product' element={<Product />} />
        <Route path='/frame' element={<Frame />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/fakeme' element={<Fakeme />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
    </LocaleProvider>
  );
}
export default App;