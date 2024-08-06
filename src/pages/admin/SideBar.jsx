import styles from './SideBar.module.scss';
import { NavLink } from "react-router-dom";
export default function SideBar(){
    return (
        <div className = {styles.sideBar}>
              <ul className={styles.list}>
                <li> 
                    <NavLink> Actualizar archivos</NavLink> 
                    <ul>
                        <li>
                            <NavLink to = "primeros-puestos"> Primerospuetos</NavLink>
                        </li>
                        <li>
                            <NavLink to = "proximo-inicio"> Próximo inicio </NavLink>
                        </li>
                        <li>    
                            <NavLink to = "brochure"> Brochure </NavLink>
                        </li>
                        <li>    
                            <NavLink to = "textos"> Textos </NavLink>
                        </li>
                    </ul>
                </li>
                <li> 
                    <NavLink to ="alumnos"> Alumnos Registrados</NavLink> 
                </li>
                <li> 
                    <NavLink to = "profesores"> Administrar profesores</NavLink> 
                </li>
                <li> 
                    <NavLink to = "cuentas"> Administrar cuentas</NavLink> 
                </li>
            </ul>
        </div>
    );
}