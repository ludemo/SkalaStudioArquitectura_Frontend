import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../context/AuthContext';
export default function Login() {
    const clientID = "72925900356-dlmqrd1dnrfumfo7sijbl5nhbbuga82c.apps.googleusercontent.com";
    const [error, setError] = useState("");
    const { setAuth } = useAuth();
    const navigate = useNavigate();
    const allowedEmails = ["mrsmeow007@gmail.com"];  // Lista de correos permitidos

    const onSuccess = (credentialResponse) => {
        const userObject = jwtDecode(credentialResponse.credential);

        if (allowedEmails.includes(userObject.email)) {
            setAuth({ token: true, email: userObject.email ,picture : userObject.picture});
            navigate("/Admin");
        } else {
            console.log("Usuario no permitido");
            setError("Usuario no permitido");
        }
    };

    const onFailure = () => {
        setError("Algo salió mal. Inténtalo de nuevo.");
        console.log("Algo salió mal. Inténtalo de nuevo.")
    };
    return (
        <GoogleOAuthProvider clientId={clientID}>
            <div>
                <h1>Talleres</h1>
                <div className="btn">
                    <GoogleLogin
                        onSuccess={onSuccess}
                        onError={onFailure}
                    />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
        </GoogleOAuthProvider>
    );
}
 