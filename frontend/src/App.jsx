import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VarietyDetails from './pages/VarietyDetails';
import VarietyPredictionHome from './pages/VarietyPredictionHome';
import PaddyVarietyForm from './pages/PaddyInputPage';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { AuthProvider } from './AuthContext';
import PrivateRoute from './PrivateRoute';
import VarietyResult from './pages/VarietyResults';
import RiceVarietiesPage from './pages/Varieties';
import RiceVarietyMap from './pages/RiceVarietyMap';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css'
import PaddyCropCalender from './pages/PaddyCropCalender';
import VarietyRecommendationProcess from './pages/VarityRecommendatioProcess';
import Map from './pages/Map';

function App() {
  return (
    <AuthProvider>
    <Router>      
      <Navbar />
      <Routes>
        <Route path="/" element={<VarietyPredictionHome />} />
        <Route path="/variety-input" element={<PaddyVarietyForm />} />
        <Route path="/result" element={<VarietyResult />} />
        <Route path="/variety-details/:varietyName" element={<VarietyDetails />} />
        <Route path="/varieties" element={<RiceVarietiesPage />} />
        <Route path="/map" element={<Map />} />
        <Route path="/crop-calender" element={<PaddyCropCalender />} />
        <Route path="/variety-process" element={<VarietyRecommendationProcess />} />        
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
       
      </Routes> <Footer />
    </Router>
    </AuthProvider>
  );
}

export default App;
