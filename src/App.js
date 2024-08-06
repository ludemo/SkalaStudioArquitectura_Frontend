import './styles/styles.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Suficiencia from "./pages/suficiencia-Unsa/page";
import HomePage from './pages/page';
import Login from './pages/admin/Login';
import Admin from './pages/admin/Admin';
import { PrivateRoutes } from './utils/PrivateRoutes';
import { AuthProvider } from './context/AuthContext';
import Formulario from 'pages/suficiencia-Unsa/formulario';
import Talleres from 'pages/talleres/page';
import EstudioArquitectura from 'pages/arquitectura/page';
import Dibujo from 'pages/talleres/dibujo';
import Geometria from 'pages/talleres/geometria';
import Maqueteria from 'pages/talleres/maqueteria';
import Primerospuetos from 'pages/admin/actualizar/PrimerosPuestos';
import Brochure from 'pages/admin/actualizar/Brochure';
import ProximoInicio from 'pages/admin/actualizar/ProximoInicio';
import Textos from 'pages/admin/actualizar/Textos';
import Alumnos from 'pages/admin/Alumnos';
import Cuentas from 'pages/admin/Cuentas';
import Profesores from 'pages/admin/Profesores';
function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/suficiencia-Unsa" element={<Suficiencia />} />
                    {/* Talleres */}
                    <Route path="/talleres" element = {<Talleres/>}></Route>
                    <Route path = "/talleres/dibujo" element = {<Dibujo/>}></Route>
                    <Route path = "/talleres/geometria" element = {<Geometria/>}></Route>
                    <Route path = "/talleres/maqueteria" element = {<Maqueteria/>}></Route>
                    {/* Suficiencia */}
                    <Route path="/suficiencia-Unsa/formulario" element={<Formulario />} />
                    <Route path="/estudio-Arquitectura" element = {<EstudioArquitectura/>}></Route>
                    <Route element={<PrivateRoutes />}>
                        {/* Administrador  */}
                        <Route path="/Admin" element={<Admin />} >
                            <Route path="actualizar/primeros-puestos" element={<Primerospuetos/>} />
                            <Route path="actualizar/proximo-inicio" element={<ProximoInicio/>} />
                            <Route path="actualizar/brochure" element={<Brochure/>} />
                            <Route path="actualizar/textos" element={<Textos/>} />
                            <Route path="alumnos" element={<Alumnos/>} />
                            <Route path="profesores" element={<Profesores/>} />
                            <Route path="cuentas" element={<Cuentas/>} />
                        </Route>
                    </Route>
                    <Route path="/Login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
