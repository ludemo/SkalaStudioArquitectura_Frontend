import { useAuth } from '../../context/AuthContext';
export default function Admin() {
    const {auth , setAuth} = useAuth();

    const handleLogout = () => {
        setAuth({ token: false, email: "", picture: "" });
        localStorage.removeItem('auth');
      };
    
    return (
        <div>
            <h1>Bienvenido {auth.email} usted es el mejor</h1>
            <img src={auth.picture} alt="imagen de perfil"/>
            <h1>Admin</h1>
            <button onClick={handleLogout}>Cerrar Sesión</button>
        </div>
    );
}