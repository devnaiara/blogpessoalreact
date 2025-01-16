import { Link } from 'react-router-dom';

function Navbar () {
    return (
        <nav className="w-full flex justify-center py-4
                        bg-indigo-900 text-white">

            <div className="container flex justify-between text-lg">
                <Link to="/home"> Blog Pessoal </Link>

                <div className="flex space gap-4">
                    <Link to="/" className="text-white">Home</Link>
                    <Link to="/Postagens" className="text-white">Postagens</Link>
                    <Link to="/Temas" className="text-white">Tema</Link>
                    <Link to="/Cadastrar Temas" className="text-white">Cadastrar Tema</Link>
                    <Link to="/Perfil" className="text-white">Perfil</Link>
                    <Link to="/Sair" className="text-white">Sair</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;