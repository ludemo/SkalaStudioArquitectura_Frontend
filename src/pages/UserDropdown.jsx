import PropTypes from 'prop-types'
import styles from './UserDropdown.module.scss'
import { useState } from 'react'
import common from '@/assets/img/common/index'
function UserDropdown ({ userName, userImage, onLogout }) {
  const [open, setOpen] = useState(false)
  const handleToggle = () => {
    setOpen(!open)
  }

  return (
    <div className={styles.userDropdown}>
        <div className={styles.userDropdown__user}>
        <img
            src={userImage}
            alt='imagen de perfil'
            className={styles.userDropdown__image}
            referrerPolicy='no-referrer'
          />
          <span className={styles.userDropdown__name}>{userName}</span>
          <button
            onClick={handleToggle}
            style = {{ backgroundColor: 'transparent', border: 'none' }}
          >
          <img
            src={common.flecha}
            alt="Flecha para desplegar menú"
            className={`${styles.arrow} ${open ? styles.arrow__rotate : ''}`}
          />
        </button>
        </div>
        {open && (
        <div className={styles.userDropdown__menu}>
            <button className = {styles.userDropdown__logout} onClick={onLogout}><img src = {common.closed} className = {styles.closedImage}alt = 'closed'></img>Cerrar Sesión</button>
        </div>
        )}
    </div>
  )
}

UserDropdown.propTypes = {
  userName: PropTypes.string.isRequired,
  userImage: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired
}

export default UserDropdown
