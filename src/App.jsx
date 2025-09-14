import './App.css';
import Home from './pages/home';
import { HashRouter, Route, Routes } from 'react-router-dom';
import View from './pages/view';
import Order from './pages/order';
import ScrollToTop from "./ScrollToTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <div className="app">
        <HashRouter>
          <ScrollToTop />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/view/:id' element={<View />} />
            <Route path='/order/:id' element={<Order />} />
          </Routes>
          <ToastContainer position="top-right" autoClose={3000} />
        </HashRouter>
      </div>
    </>
  );
}

export default App;
