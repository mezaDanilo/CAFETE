// src/main.tsx
import ReactDOM from 'react-dom/client';
import './index.css'; // Aquí se importan los estilos globales (por ejemplo, Tailwind)
import App from './App'; // El componente principal de la app

// Monta el componente 'App' en el div con id 'root'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
