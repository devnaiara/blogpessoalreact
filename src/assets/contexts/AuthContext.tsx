import { createContext, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom"; // Adicionado para usar navegação
import UsuarioLogin from "../../models/UsuarioLogin";
import { login } from "../../services/Service";
import { ToastAlerta } from "../../utils/ToastAlerta";

interface AuthContextProps {
    usuario: UsuarioLogin;
    handleLogout(): void;
    handleLogin(usuario: UsuarioLogin): Promise<void>;
    logout(): void; // Adicionado para incluir o método no contexto
    isLoading: boolean;
}

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
    const [usuario, setUsuario] = useState<UsuarioLogin>({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        foto: "",
        token: ""
    });

    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate(); // Inicializa o `useNavigate`

    async function handleLogin(usuarioLogin: UsuarioLogin) {
        setIsLoading(true);
        try {
            await login(`/usuarios/logar`, usuarioLogin, setUsuario);
            ToastAlerta("Usuário foi autenticado com sucesso!", "sucesso");
        } catch (error) {
            ToastAlerta("Os dados do Usuário estão inconsistentes!", "erro");
        }
        setIsLoading(false);
    }

    function handleLogout() {
        setUsuario({
            id: 0,
            nome: "",
            usuario: "",
            senha: "",
            foto: "",
            token: ""
        });
    }

    function logout() {
        handleLogout();
        ToastAlerta("O Usuário foi desconectado com sucesso!", "info"); // Corrigido o nome da função
        navigate("/"); // Utilizado o `navigate` do React Router
    }

    return (
        <AuthContext.Provider value={{ usuario, handleLogin, handleLogout, logout, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
}
