import './App.css';
import Footer from './Components/Footer';
import Galaxysidebar from './Components/Galaxysidebar'
import About from './Pages/About';
import Admin from './Pages/Admin';
import Contact from './Pages/Contact';
import Home from './Pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';

import Pages from './Pages/Pages';

function App() {
  return (
    <>
      <BrowserRouter>
        <Galaxysidebar />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About aboutdata={About} />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/admin' element={<Admin />}/>
          <Route path='/pages' element={<Pages />} />
          <Route path='/login' element={<Login />} />
         
       
         


        </Routes>
        <Footer />
      </BrowserRouter>
      {/* <Signup/>
<Login/>
<Delete/>
<Update/> */}



    </>
  );
}

export default App;
