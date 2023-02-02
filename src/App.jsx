import {Routes, Route} from 'react-router-dom';

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";


import Home from "./view/Home";
import Contact from "./view/contact";
import NotFound from "./view/NotFound";

export default function App() {
  return <>
  <Navbar/>
    <main>
      <Routes>
        <Route 
        path= "/" 
        element={<Home/>}
        />
        <Route 
        path= "/contact" 
        element={<Contact/>}
        />
        <Route 
        path= "/*" 
        element={<NotFound/>}
        />
      </Routes>
    </main>
  <Footer/>
  </>

}