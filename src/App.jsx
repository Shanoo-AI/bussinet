import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import { Services } from './pages/Services/Services';
import { ServicePage } from './pages/Services/ServicePage';
import { Contact } from './pages/Contact/Contact';
import './styles/globals.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:slug" element={<ServicePage />} />
          <Route path="contact-us" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;