import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './assets/components/navbar/Navbar';
import Footer from './assets/components/footer/Footer';
import Home from './pages/home/Home';
import Cadastro from './pages/cadastro/Cadastro';
import Login from './pages/login/Login';

// import Postagens from './pages/Postagens';
// import Temas from './pages/Temas';
// import CadastrarTemas from './pages/CadastrarTemas';
// import Perfil from './pages/Perfil';
// import Sair from './pages/Sair';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="min-h-[80vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/postagens" element={<Postagens />} />
          <Route path="/temas" element={<Temas />} />
          <Route path="/cadastrar-temas" element={<CadastrarTemas />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/sair" element={<Sair />} /> */}
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
