import './styles/styles.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Suficiencia from "./pages/suficiencia-Unsa/page";
import HomePage from './pages/page';
import Login from './pages/admin/login';
import Admin from './pages/admin/page';
import { PrivateRoutes } from './utils/PrivateRoutes';
import { AuthProvider } from './context/AuthContext';
import Formulario from 'pages/suficiencia-Unsa/formulario';
import Talleres from 'pages/talleres/page';
import EstudioArquitectura from 'pages/arquitectura/page';
import Dibujo from 'pages/talleres/dibujo';
import Geometria from 'pages/talleres/geometria';
import Maqueteria from 'pages/talleres/maqueteria';

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
                        <Route path="/Admin" element={<Admin />} />
                    </Route>
                    <Route path="/Login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
