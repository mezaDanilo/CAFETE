// src/index.tsx
import ReactDOM from 'react-dom/client';
import './index.css';  // Tailwind o CSS general
import App from './App';  // Componente principal
import { BrowserRouter as Router } from 'react-router-dom';  // Envolvemos la app en Router

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Router>
    <App />
  </Router>
);
