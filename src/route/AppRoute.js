import React, { Fragment } from 'react'
import { Routes, Route } from "react-router-dom";
import ContactPage from '../pages/ContactPage';
import HomePage from '../pages/HomePage';
import PurchasePage from '../pages/PurchasePage';
import PrivacyPage from "../pages/PrivacyPage";
import RefundPage from "../pages/RefundPage";
import UserLoginPage from '../pages/UserLoginPage';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import NotificationPage from '../pages/NotificationPage';
import FavouritePage from '../pages/FavouritePage';

const AppRoute = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<UserLoginPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/purchase" element={<PurchasePage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/refund" element={<RefundPage />} />
        <Route path="/productdetails" element={<ProductDetailsPage />} />
        <Route path="/notification" element={<NotificationPage />} />
        <Route path="/favourite" element={<FavouritePage />} />
      </Routes>
    </Fragment>
  );
}

export default AppRoute;
