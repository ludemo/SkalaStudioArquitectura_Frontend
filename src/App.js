import './styles/styles.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Suficiencia from "./pages/suficiencia-Unsa/page";
import HomePage from './pages/page';
import Login from './pages/admin/login';
import Admin from './pages/admin/page';
import { PrivateRoutes } from './utils/PrivateRoutes';
import { AuthProvider } from './context/AuthContext';

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/suficiencia-Unsa" element={<Suficiencia />} />
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
