import React from "react";
import { Routes, Route } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import SearchPage from "./pages/Search";
import ExplorePage from "./pages/Explore";
import StatsPage from "./pages/Stats";
import PartnersPage from "./pages/Partners";
import SignupPage from "./pages/Signup";
import LoginPage from "./pages/Login";
import BusinessConnectionPage from "./pages/BusinessConnection";
import UnderReviewPage from "./pages/UnderReview";
import ForgotPasswordPage from "./pages/ForgotPassword";
import ResetPasswordPage from "./pages/ResetPassword";
import AdminSignupPage from "./pages/AdminSignup";
import ExploreOfferingsPage from "./pages/ExploreOfferings";
import OfferingProductPage from "./pages/OfferingProduct";
import OfferingProductTwo from "./pages/OfferingProductTwo";
import OfferingProductThree from "./pages/OfferingProductThree";
import RelatedOfferingsPage from "./pages/RelatedOfferings";

const App = () => {
  return (
    <>
    <div className='App'>
        <CssBaseline/>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/stats" element={<StatsPage />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/business-connection" element={<BusinessConnectionPage />} />
        <Route path="/under-review" element={<UnderReviewPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/admin-signup" element={<AdminSignupPage />} />
        <Route path="/explore-offerings" element={<ExploreOfferingsPage />} />
        <Route path="/offering-product" element={<OfferingProductPage />} />
        <Route path="/offering-product-two" element={<OfferingProductTwo />} />
        <Route path="/offering-product-three" element={<OfferingProductThree />} />
        <Route path="/related-offerings" element={<RelatedOfferingsPage />} />
      </Routes>
      <Footer/>
      </div>
    </>
  );
};

export default App;
