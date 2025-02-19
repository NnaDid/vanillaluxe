import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from "@/components/ui/provider"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 

import App from './App.jsx'
import About from './About.jsx';
import Services from './Services.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Router>
    </Provider>
  </StrictMode>,
)
