import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { PublicLayout } from '../layouts/PublicLayout';
import { HomePage } from '../pages/public/HomePage';
import { AboutPage } from '../pages/public/AboutPage';
import { DepartmentsPage } from '../pages/public/DepartmentsPage';
import { DoctorsPage } from '../pages/public/DoctorsPage';
import { ServicesPage } from '../pages/public/ServicesPage';
import { BookingPage } from '../pages/public/BookingPage';
import { ContactPage } from '../pages/public/ContactPage';
import { LoginPage } from '../pages/auth/LoginPage';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Public Hospital Website Routes */}
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="departments" element={<DepartmentsPage />} />
        <Route path="doctors" element={<DoctorsPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="appointments/book" element={<BookingPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>

      {/* Authentication & Portal Login */}
      <Route path="/login" element={<LoginPage />} />

      {/* Fallback route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
