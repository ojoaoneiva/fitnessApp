import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import OurPlans from './pages/OurPlans';
import Footer from './components/Footer';
import Menu from './components/Menu';
import ModuleDetails from './pages/ModuleDetails';
import ProfilePage from './pages/ProfilePage';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/OurPlans" element={<OurPlans />} />
          <Route path="/module/:id" element={<ModuleDetails />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;