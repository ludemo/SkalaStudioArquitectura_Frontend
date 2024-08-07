import { useAuth } from "../../context/AuthContext";
import SideBar from "./SideBar";
import styles from "./Admin.module.scss";
import { Outlet } from "react-router-dom";
export default function Admin() {
  const { auth, setAuth } = useAuth();

  const handleLogout = () => {
    setAuth({ token: false, email: "", picture: "", given_name: "" });
    localStorage.removeItem("auth");
  };
  return (
    <div className={styles.container}>
      <SideBar />
      <div className={styles.outlet}>
        <h1>Bienvenido {auth.email} usted es el mejor</h1>
        <img
          src={auth.picture}
          alt="imagen de perfil"
          referrerPolicy="no-referrer"
        />
        <h1>Nombre : {auth.given_name}</h1>
        <button onClick={handleLogout}>Cerrar Sesión</button>
        <Outlet />
      </div>
    </div>
  );
}
