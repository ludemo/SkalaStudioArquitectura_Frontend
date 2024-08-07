import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import common from "assets/img/common";
export default function Login() {
  const clientID =
    "72925900356-dlmqrd1dnrfumfo7sijbl5nhbbuga82c.apps.googleusercontent.com";
  const [error, setError] = useState("");
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const allowedEmails = [
    "mrsmeow007@gmail.com",
    "acanazacua@unsa.edu.pe",
    "sonque@unsa.edu.pe",
    "jpaniura@unsa.edu.pe",
  ];

  const onSuccess = (credentialResponse) => {
    const userObject = jwtDecode(credentialResponse.credential);

    if (allowedEmails.includes(userObject.email)) {
      setAuth({
        token: true,
        email: userObject.email,
        picture: userObject.picture,
        given_name: userObject.given_name,
      });
      navigate("/Admin");
    } else {
      console.log("Usuario no permitido");
      setError("Usuario no permitido");
    }
  };

  const onFailure = () => {
    setError("Algo salió mal. Inténtalo de nuevo.");
    console.log("Algo salió mal. Inténtalo de nuevo.");
  };
  return (
    <GoogleOAuthProvider clientId={clientID}>
      <div className="login-container">
        <div className="login">
          <div className="login__logo-container">
            <img
              className="login__logo-image"
              src={common.lampara_icon}
              alt="lampara-logo"
            />
            <img
              className="login__logo-texto"
              src={common.Skala_texto}
              alt="skala-logo"
            />
          </div>
          <div className="login__content">
            <h1 className="login__title">
              Área de <br /> administración
            </h1>
            <div className="login__buton-container">
              <GoogleLogin onSuccess={onSuccess} onError={onFailure} />
            </div>
            {error && <p className="login__error">{error}</p>}
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}
