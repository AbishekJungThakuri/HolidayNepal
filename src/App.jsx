import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import { Navbar } from "./Components/Navbar/Navbar"
import { Home } from "./Pages/Home/Home"
import { Place } from "./Pages/Places/Place"
import { Adventure } from "./Pages/Adventure/Adventure"
import { Packages } from "./Pages/Package/Packages"
import { Event } from "./Pages/Events/Event"
import { Footer } from "./Components/Footer/Footer"

import './themes.css';
import { Form } from "./Components/Form/Form"
import { AiTripComponent } from "./Components/AiTripGenerate/AiTrip/AiTripComponent"

function App() {

  const location = useLocation();
  const showNavbarFooter = location.pathname !== '/form';  

  return (
    <>
        <Navbar />
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/place" element={<Place/>} />
           <Route path="/adventure" element={<Adventure />} />
           <Route path="/package" element={<Packages />} />
           <Route path="/event" element={<Event />} />
           <Route path="/form" element={<Form/>} />
           <Route path="/aitrip" element={<AiTripComponent/>}/>
        </Routes>
      {showNavbarFooter && <Footer />  }
    </>
  );
}

export default App;