import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import ShipmentDetails from './components/forms/ShipmentDetails';
import PricingOptions from './components/forms/pricingoptions';
import ReviewConfirm from './components/forms/reviewconfirm';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shipment-details" element={<ShipmentDetails />} />
        <Route path="/pricing-options" element={<PricingOptions />} />
        <Route path="/review-confirm" element={<ReviewConfirm />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
