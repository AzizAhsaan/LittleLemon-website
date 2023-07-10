import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './component/header'
import Home from './component/Home'
import Reservation from './component/Reservation'
import Gallery from './component/Gallery'
import Menu from './component/Menu'
import Events from './component/Events'
import Footer from './component/Footer'
import Cart from './component/Cart';
function App() {
  return (
    <div className=' flex-col bg-[#536D95] w-[100vw] '>
      <BrowserRouter>
        <Header  />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Reservation" element={<Reservation />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
