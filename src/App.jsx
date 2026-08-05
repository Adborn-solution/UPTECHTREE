import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ServiceDetails from "./pages/ServiceDetails";
import ServicesPage from "./pages/ServicesPage";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:serviceId" element={<ServiceDetails />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
