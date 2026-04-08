import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';

export default function App() {
  return (
    <Router>
      <div className="mesh-bg min-h-screen">
        {/* Grain noise overlay */}
        <div className="noise-overlay" />

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        <Footer />

        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: '#13131F',
              color: '#F0F0FF',
              border: '1px solid #1E1E30',
              borderRadius: '12px',
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '14px',
            },
            success: {
              iconTheme: { primary: '#00FF9C', secondary: '#0A0A0F' },
            },
            error: {
              iconTheme: { primary: '#FF4D6D', secondary: '#0A0A0F' },
            },
          }}
        />
      </div>
    </Router>
  );
}
