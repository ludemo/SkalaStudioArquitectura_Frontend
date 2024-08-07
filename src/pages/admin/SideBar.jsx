import styles from './SideBar.module.scss'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import sideBar from '../../assets/img/admin/sidebarImg'
import common from '../../assets/img/common/index'

export default function SideBar () {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)
  const [open, setOpen] = useState(true)
  const toggleSubMenu = (e) => {
    setIsSubMenuOpen(!isSubMenuOpen)
  }

  return (
    <div className={`${styles.sidebar} ${!open ? styles.sidebar__hiden : ''}`}>
      <div className={styles.sidebar__logoContainer}>
        <img
          className={styles.sidebar__logoImg}
          src={common.lampara_icon}
          alt='logo_Img'
        />
        {open && (
          <img
            className={styles.sidebar__logoText}
            src={common.Skala_texto}
            alt='logo_Text'
          />
        )}
        <button
          className={`${styles.arrow} ${!open ? styles.arrow__rotate : ''}`}
          onClick={() => setOpen(!open)}
          aria-label='Toggle menu'
        >
          <img src={sideBar.arrow} alt='' />
        </button>
      </div>
      <ul className={styles.sidebar__list}>
        <li>
          <NavLink
            to='actualizar/primeros-puestos'
            className={({ isActive }) =>
              `${styles.sidebar__ItemLink} ${
                isActive || isSubMenuOpen ? styles.active : ''
              }`}
            onClick={toggleSubMenu}
            style={{ marginBottom: open && isSubMenuOpen ? '0' : '20px' }}
          >
            <img
              src={sideBar.doc}
              className={styles.sidebar__ItemImage}
              alt='doc'
            />
            {open && 'Actualizar archivos'}
          </NavLink>
          {open && isSubMenuOpen && (
            <ul className={styles.sidebar__list}>
              <li>
                <NavLink
                  to='actualizar/primeros-puestos'
                  className={({ isActive }) =>
                    isActive ? styles.subActive : styles.sidebar__subItemLink}
                >
                  Primerospuetos
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='actualizar/proximo-inicio'
                  className={({ isActive }) =>
                    isActive ? styles.subActive : styles.sidebar__subItemLink}
                >
                  Próximo inicio
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='actualizar/brochure'
                  className={({ isActive }) =>
                    isActive ? styles.subActive : styles.sidebar__subItemLink}
                >
                  Brochure
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='actualizar/textos'
                  className={({ isActive }) =>
                    isActive ? styles.subActive : styles.sidebar__subItemLink}
                >
                  Textos
                </NavLink>
              </li>
            </ul>
          )}
        </li>
        <li>
          <NavLink
            to='alumnos'
            className={({ isActive }) =>
              isActive ? styles.active : styles.sidebar__ItemLink}
            onClick={() => setIsSubMenuOpen(false)}
          >
            <img
              className={styles.sidebar__ItemImage}
              src={sideBar.student}
              alt='doc'
            />
            {open && 'Alumnos'}
          </NavLink>
        </li>
        <li>
          <NavLink
            to='profesores'
            className={({ isActive }) =>
              isActive ? styles.active : styles.sidebar__ItemLink}
            onClick={() => setIsSubMenuOpen(false)}
          >
            <img
              className={styles.sidebar__ItemImage}
              src={sideBar.teacher}
              alt='doc'
            />
            {open && 'Profesores'}
          </NavLink>
        </li>
        <li>
          <NavLink
            to='cuentas'
            className={({ isActive }) =>
              isActive ? styles.active : styles.sidebar__ItemLink}
            onClick={() => setIsSubMenuOpen(false)}
          >
            <img
              className={styles.sidebar__ItemImage}
              src={sideBar.user}
              alt='doc'
            />
            {open && 'Administrar cuentas'}
          </NavLink>
        </li>
      </ul>
    </div>
  )
}
