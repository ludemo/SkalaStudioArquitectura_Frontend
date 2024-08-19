import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext'
import styles from './Login.module.scss'
import common from '@/assets/img/common/index'
export default function Login () {
  const clientID =
    '72925900356-dlmqrd1dnrfumfo7sijbl5nhbbuga82c.apps.googleusercontent.com'
  const [error, setError] = useState('')
  const { setAuth } = useAuth()
  const navigate = useNavigate()
  const allowedEmails = [
    'mrsmeow007@gmail.com',
    'acanazacua@unsa.edu.pe',
    'sonque@unsa.edu.pe',
    'jpaniura@unsa.edu.pe'
  ]

  const onSuccess = (credentialResponse) => {
    const userObject = jwtDecode(credentialResponse.credential)

    if (allowedEmails.includes(userObject.email)) {
      setAuth({
        token: true,
        email: userObject.email,
        picture: userObject.picture,
        given_name: userObject.given_name
      })
      navigate('/')
    } else {
      console.log('Usuario no permitido')
      setError('Usuario no permitido')
    }
  }

  const onFailure = () => {
    setError('Algo salió mal. Inténtalo de nuevo.')
    console.log('Algo salió mal. Inténtalo de nuevo.')
  }
  return (
    <GoogleOAuthProvider clientId={clientID}>
      <div className={styles['login-container']}>
        <div className={styles.login}>
          <div className={styles['login__logo-container']}>
            <img
              className={styles['login__logo-image']}
              src={common.lamparaIcon}
              alt='lampara-logo'
            />
            <img
              className={styles['login__logo-texto']}
              src={common.SkalaTexto}
              alt='skala-logo'
            />
          </div>
          <div className={styles.login__content}>
            <h1 className={styles.login__title}>
              Área de <br /> administración
            </h1>
            <div className={styles['login__buton-container']}>
              <GoogleLogin onSuccess={onSuccess} onError={onFailure} />
            </div>
            {error && <p className={styles.login__error}>{error}</p>}
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  )
}
