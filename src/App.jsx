import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './Components/Navbar/Navbar';
import { Home } from './Pages/Home/Home';
import { Adventure } from './Pages/Adventure/Adventure';
import { Packages } from './Pages/Package/Packages';
import { Event } from './Pages/Events/Event';
import { Footer } from './Components/Footer/Footer';
import { Place } from './Pages/Places/Place';

import './themes.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/place" element={<Place/>} />
          <Route path="/adventure" element={<Adventure />} />
          <Route path="/package" element={<Packages />} />
          <Route path="/event" element={<Event />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
