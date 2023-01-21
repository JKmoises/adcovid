import { Route } from 'react-router';
import { Routes } from 'react-router-dom';
import './App.css';
import { Navegacion } from './components/Navegacion';
import { CovidProvider } from './context/CovidProvider';
import { Continentes } from './pages/Continentes';
import { Globales } from './pages/Globales';
import { Pais } from './pages/Pais';
import { Vacunas } from './pages/Vacunas';

function App() {
  return (
    <div className="d-md-flex min-vh-100">
      <Navegacion />

      <main className="d-flex flex-column align-items-center container-fluid py-4">
        <CovidProvider>
          <Routes>
            <Route path="/" element={<Globales />} />

            <Route path="/casos-continente" element={<Continentes />} />

            <Route path="/casos-pais" element={<Pais />} />

            <Route path="/vacunas" element={<Vacunas />} />
          </Routes>
        </CovidProvider>
      </main>
    </div>
  );
}

export default App;
