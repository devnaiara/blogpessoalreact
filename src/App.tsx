import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import './App.css';
import Navbar from './assets/components/navbar/Navbar';
import Footer from './assets/components/footer/Footer';
import Home from './pages/home/Home';
// import Postagens from './pages/Postagens';
// import Temas from './pages/Temas';
// import CadastrarTemas from './pages/CadastrarTemas';
// import Perfil from './pages/Perfil';
// import Sair from './pages/Sair';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/postagens" element={<Postagens />} />
        <Route path="/temas" element={<Temas />} />
        <Route path="/cadastrar-temas" element={<CadastrarTemas />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/sair" element={<Sair />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;