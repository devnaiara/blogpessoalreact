import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext";

function Navbar () {

    const navigate = useNavigate();

    const { handleLogout } = useContext(AuthContext)

    function logout() {
        handleLogout()
        alert('O Usuário foi desconectado com sucesso!')
        navigate('/')
    }

    return (
        <nav className="w-full flex justify-center py-4
                        bg-indigo-900 text-white">

            <div className="container flex justify-between text-lg">
                <Link to='/home' className="text-2xl font-bold">Blog Pessoal</Link>

                <div className="flex space gap-4">
                    <Link to="/" className="text-white">Home</Link>
                    <Link to="/Postagens" className="text-white">Postagens</Link>
                    <Link to="/Temas" className="text-white">Tema</Link>
                    <Link to="/Cadastro" className="text-white">Cadastrar</Link>
                    <Link to="/Perfil" className="text-white">Perfil</Link>
                    <Link to="/Sair" onClick={logout} className="text-white">Sair</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;