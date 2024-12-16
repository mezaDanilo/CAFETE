import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home'; // Creas una página de inicio
import Profile from './pages/Profile'; // Creas una página de perfil

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-blue-500 hover:text-blue-700">Inicio</Link>
            </li>
            <li>
              <Link to="/profile" className="text-blue-500 hover:text-blue-700">Perfil</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
