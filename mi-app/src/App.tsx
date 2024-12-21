import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      {/* Barra de navegación global */}
      <header className="w-full py-4 bg-gradient-to-r from-pink-600 to-purple-700 shadow-lg">
        <div className="max-w-screen-lg mx-auto w-full flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold text-white">Cafecito</h1>
          <nav className="flex items-center space-x-6">
            <Link to="/" className="text-white hover:text-purple-200">Inicio</Link>
            <Link to="/explore" className="text-white hover:text-purple-200">Explorar</Link>
            <Link to="/profile" className="text-white hover:text-purple-200">Perfil</Link>
            <button className="bg-white text-pink-600 py-2 px-4 rounded-lg shadow-md hover:bg-pink-100">
              Donar un Cafecito
            </button>
          </nav>
        </div>
      </header>

      {/* Rutas principales */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      {/* Footer global */}
      <footer className="w-full bg-gradient-to-r from-pink-600 to-purple-700 text-white py-8">
        <div className="max-w-screen-lg mx-auto w-full px-4 text-center">
          <p className="text-sm font-light">© 2024 Cafecito. Todos los derechos reservados.</p>
          <nav className="mt-4 flex justify-center space-x-4">
            <a href="#" className="hover:text-purple-200">Sobre nosotros</a>
            <a href="#" className="hover:text-purple-200">Términos</a>
            <a href="#" className="hover:text-purple-200">Contacto</a>
          </nav>
        </div>
      </footer>
    </Router>
  );
}

export default App;
