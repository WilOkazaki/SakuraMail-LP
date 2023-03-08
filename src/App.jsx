
import Hero from "./components/Hero"
import ContactUs from "./pages/ContactUs"
import AboutUs from "./pages/AboutUs"
import Gallery from "./pages/Gallery"
import GetStarted from "./pages/GetStarted"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar"

function App() {
  

  return (
    <BrowserRouter>
      <main className="wrapper">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Hero />} />
          <Route exact path="/get-started" element={ <GetStarted />} />
          <Route exact path="/gallery" element={ <Gallery />} />
          <Route exact path="/contact-us" element={ <ContactUs />} />
          <Route exact path="/about-us" element={ <AboutUs />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
