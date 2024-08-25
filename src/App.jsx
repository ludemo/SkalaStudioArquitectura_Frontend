import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import '@/styles/styles.scss'
import Admin from './pages/Admin'
import { PrivateRoutes } from './utils/PrivateRoutes'
import { AuthProvider } from './context/AuthContext'
import Primerospuetos from './pages/actualizar/PrimerosPuestos'
import Brochure from './pages/actualizar/Brochure'
import ProximoInicio from './pages/actualizar/ProximoInicio'
import Textos from './pages/actualizar/Textos'
import Alumnos from './pages/alumno/Alumnos'
import AlumnoProfile from './pages/alumno/AlumnoProfile'
import AlumnoAsistencia from './pages/alumno/AlumnoAsistencia'
import AlumnoDatos from './pages/alumno/AlumnoDatos'
import Cuentas from './pages/Cuentas'
import Profesores from './pages/profesor/Profesores'
import AgregarProfesor from './pages/profesor/agregar/AgregarProfesor'
function App () {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoutes />}>
            {/* Administrador  */}
            <Route path='/' element={<Admin />}>
              {/* Actualizar archivos */}
              <Route path='actualizar/primeros-puestos' element={<Primerospuetos />} />
              <Route path='actualizar/proximo-inicio' element={<ProximoInicio />} />
              <Route path='actualizar/brochure' element={<Brochure />} />
              <Route path='actualizar/textos' element={<Textos />} />
              {/* Alumnos */}
              <Route path='alumnos' element={<Alumnos />}>
                <Route path=':id' element={<AlumnoProfile />}>
                  <Route index element={<Navigate to="datos" />} />
                  <Route path='datos' element = {<AlumnoDatos/>}/>
                  <Route path='asistencia' element = {<AlumnoAsistencia/>}/>
                </Route>
              </Route>
               {/* Profesores */}
              <Route path='profesores' element={<Profesores />} />
              <Route path='profesores/agregar' element={<AgregarProfesor />} />
               {/* Cuentas */}
              <Route path='cuentas' element={<Cuentas />} />
            </Route>
          </Route>
          <Route path='/Login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
