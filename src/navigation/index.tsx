/* eslint-disable import/no-extraneous-dependencies */
import { Routes, Route, Navigate } from 'react-router-dom';

import { DetailsPage } from '../pages/details.page';
import { HomePage } from '../pages/home.page';

export const Navigation = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/detail/:id" element={<DetailsPage />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);
