import Header from "./components/Header"
import Hero from "./components/Hero"
import ContactUs from "./pages/ContactUs"
import AboutUs from "./pages/AboutUs"
import GetStarted from "./pages/GetStarted"
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  

  return (
    <BrowserRouter>
      <main className="wrapper">
        <Header />
        <Routes>
          <Route exact path="/" element={<Hero />} />
          <Route exact path="/get-started" element={ <GetStarted />} />
          <Route exact path="/contact-us" element={ <ContactUs />} />
          <Route exact path="/about-us" element={ <AboutUs />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
