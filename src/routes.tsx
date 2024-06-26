import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SummaryGeneratePage from './pages/SummaryGeneratePage';
import CameraPage from './pages/CameraPage';
import AccountPage from './pages/AccountPage';
import SummaryDetailPage from './pages/SummaryDetailPage';
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import useAnalytics from './hooks/useAnalytics';
import DeleteAccountRequestPage from "./pages/DeleteAccountRequestPage";

const AppRoutes = () => {
  useAnalytics();
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/summary" element={<SummaryGeneratePage />}></Route>
      <Route path="/summary/:id" element={<SummaryDetailPage />}></Route>
      <Route path="/camera" element={<CameraPage />}></Route>
      <Route path="/account" element={<AccountPage />}></Route>
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />}></Route>
      <Route path="/delete-account-request" element={<DeleteAccountRequestPage />}></Route>
    </Routes>
  );
};

export default AppRoutes;
