import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import './index.css'
import App from './App.jsx'
import Store from './pages/Store.jsx';
import SneakerDetail from './pages/SneakerDetail.jsx';
import About from './pages/About.jsx';
import { AppProvider } from './context/AppContext.jsx';
import Cart from './pages/Cart.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<App />} />
      <Route path="/store" element={<Store />} />
      <Route path="/store/:id" element={<SneakerDetail />} />
      <Route path="/about" element={<About />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
    </BrowserRouter>
    </AppProvider>
  </StrictMode>,
)
