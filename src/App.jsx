import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import About from "./About"
import Home from "./Home"
import Vans from "./Vans"
import  "./server"
import Header from "./Header"
import VanDetail from "./VanDetail"
import Footer from "./Footer"


export default function App(){
  return(
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}