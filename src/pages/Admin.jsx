import { useAuth } from '@/context/AuthContext'
import SideBar from '@/components/SideBar'
import styles from './Admin.module.scss'
import { Outlet } from 'react-router-dom'
import UserDropdown from '@/components/UserDropdown'
export default function Admin () {
  const { auth, setAuth } = useAuth()
  const handleLogout = () => {
    setAuth({ token: false, email: '', picture: '', given_name: '' })
    localStorage.removeItem('auth')
  }
  return (
    <div className={styles.container}>
      <SideBar />
      <div className={styles.outlet}>
        <UserDropdown
          userName={auth.given_name}
          userImage={auth.picture}
          onLogout={handleLogout}
        />
        <Outlet />
      </div>
    </div>
  )
}
