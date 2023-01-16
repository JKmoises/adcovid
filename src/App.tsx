import { Route } from 'react-router';
import { Routes } from 'react-router-dom';
import './App.css';
import { Navegacion } from './components/Navegacion';
import { Continentes } from './pages/Continentes';
import { Globales } from './pages/Globales';
import { Pais } from './pages/Pais';
import { Vacunas } from './pages/Vacunas';

function App() {
  return (
    <div className="d-md-flex min-vh-100">
      <Navegacion />

      <Routes>
        <Route path="/" element={<Globales />} />

        <Route path="/casos-continente" element={<Continentes />} />

        <Route path="/casos-pais" element={<Pais />} />

        <Route path="/vacunas" element={<Vacunas />} />
      </Routes>
    </div>
  );
}

export default App;
