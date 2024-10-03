import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import '@/styles/styles.scss'
import Admin from './pages/Admin'
import { PrivateRoutes } from './utils/PrivateRoutes'
import { AuthProvider } from './context/AuthContext'
import Primerospuetos from '@/pages/landing-update/First-places'
import Brochure from '@/pages/landing-update/Brochure'
import ProximoInicio from '@/pages/landing-update/Next-start'
import Textos from '@/pages/landing-update/Texts'
import AlumnoDatos from '@/pages/student/Student-data'
import Alumnos from '@/pages/student/Students'
import AlumnoProfile from '@/pages/student/Student-profile'
import AlumnoAsistencia from '@/pages/student/Student-assistance'
import Cuentas from '@/pages/Accounts'
import Profesores from '@/pages/teacher/Teachers'
import AgregarProfesor from '@/pages/teacher/add/Add-teacher'
function App () {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoutes />}>
            {/* Administrador  */}
            <Route path='/' element={<Admin />}>
              {/* landing-update archivos */}
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
