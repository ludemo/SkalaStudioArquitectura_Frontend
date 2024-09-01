import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import '@/styles/styles.scss'
import Admin from './pages/Admin'
import { PrivateRoutes } from './utils/PrivateRoutes'
import { AuthProvider } from './context/AuthContext'
import Primerospuetos from '@/pages/landingUpdate/PrimerosPuestos'
import Brochure from '@/pages/landingUpdate/Brochure'
import ProximoInicio from '@/pages/landingUpdate/ProximoInicio'
import Textos from '@/pages/landingUpdate/Textos'
import AlumnoDatos from '@/pages/student/AlumnoDatos'
import Alumnos from '@/pages/student/Alumnos'
import AlumnoProfile from '@/pages/student/AlumnoProfile'
import AlumnoAsistencia from '@/pages/student/AlumnoAsistencia'
import Cuentas from '@/pages/Cuentas'
import Profesores from '@/pages/profesor/Profesors'
function App () {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoutes />}>
            {/* Administrador  */}
            <Route path='/' element={<Admin />}>
              {/* landingUpdate archivos */}
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
