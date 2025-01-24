import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './assets/components/navbar/Navbar';
import Footer from './assets/components/footer/Footer';
import { AuthProvider } from './assets/contexts/AuthContext';
import Home from './pages/home/Home';
import Cadastro from './pages/cadastro/Cadastro';
import Login from './pages/login/Login';
import ListaTemas from './assets/components/temas/listatemas/ListaTemas';
import FormTema from './assets/components/temas/formtema/FormTema';
import DeletarTema from './assets/components/temas/deletartema/DeletarTema';
import FormPostagem from './assets/components/postagens/formpostagem/FormPostagem';
import DeletarPostagem from './assets/components/temas/deletarpostagem/DeletarPostagem';
import Perfil from './pages/perfil/Perfil';
import ListaPostagens from './assets/components/postagens/listapostagens/ListaPostagens';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <ToastContainer />
      <BrowserRouter>
      <AuthProvider>
        <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/login" element={<Login />} />
              <Route path="/temas" element={<ListaTemas />} />
              <Route path="/cadastrartema" element={<FormTema />} />
              <Route path="/editartema/:id" element={<FormTema />} />
              <Route path="/deletartema/:id" element={<DeletarTema />} />
              <Route path="/postagens" element={<ListaPostagens />} />
              <Route path="/cadastrarpostagem" element={<FormPostagem />} />
              <Route path="/editarpostagem/:id" element={<FormPostagem />} /> 
              <Route path="/deletarpostagem/:id" element={<DeletarPostagem />} />
              <Route path="/perfil" element={<Perfil />} />
            </Routes>
          </div>
        <Footer />
      </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
