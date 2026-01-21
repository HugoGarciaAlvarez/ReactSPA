import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { AuthProvider } from './store/AuthContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Usuarios from './pages/Usuarios';
import PrivateRoute from './router/PrivateRoute';
import { Suspense, lazy } from 'react';
import './App.css';


const LazyDashboard = lazy(() => import('./pages/Dashboard'));

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <nav className="nav">
          <strong>React SPA</strong>
          <div className="links">
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/usuarios">Usuarios</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/usuarios" element={<Usuarios />} />
          
          {/* Ruta Privada [cite: 125] */}
          <Route path="/dashboard" element={
            <PrivateRoute>
              <Suspense fallback={<p>Cargando...</p>}>
                <LazyDashboard />
              </Suspense>
            </PrivateRoute>
          } />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}