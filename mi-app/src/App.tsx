import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Menú de navegación */}
        <header className="bg-blue-600 text-white shadow-md w-full">
          <div className="px-4 py-4 flex justify-between items-center">
            <h1 className="text-lg font-bold">
              <Link to="/" className="hover:text-gray-200">
                Mi Aplicación
              </Link>
            </h1>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <Link
                    to="/"
                    className="text-gray-300 hover:text-yellow-400 font-semibold transition-colors"
                  >
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link
                    to="/profile"
                    className="text-gray-300 hover:text-yellow-400 font-semibold transition-colors"
                  >
                    Perfil
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Contenido principal */}
        <main className="px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
