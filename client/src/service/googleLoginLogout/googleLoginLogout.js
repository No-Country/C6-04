import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from "gapi-script";
import axios from 'axios';

function googleLogInOut() {

    gapi.load("client:auth2", () => {
        gapi.client.init({
        clientId:
            "numero largo ID google",
        plugin_name: "chat",
        });
    });

    const handleGoogleLogin = async (googleData) => {
        try {
        const dataGoogle = await axios.post(`http://localhost:4000/auth/google`, {
            tokenId: googleData.tokenId,
            email: googleData.profileObj.email,
            imageUrl: googleData.profileObj.imageUrl,
        });
        const finallyGoogle = await dataGoogle.data;
        localStorage.setItem("token", JSON.stringify(finallyGoogle.token));
        } catch (error) {
        console.log(error);
        alert("error no se pudo ingresar", error);
        }
    };

    const logout = (response) => {
        gapi.auth2.getAuthInstance().signOut();
    };

    return ( 
        <div className="App">
        <br /><br />
        <GoogleLogin
            clientId="numero largo ID google"
            buttonText="Login"
            onSuccess={handleGoogleLogin}
            onFailure={handleGoogleLogin}
            cookiePolicy={'single_host_origin'}
            />,
            <GoogleLogout
            clientId="numero largo ID google"
            buttonText="Logout"
            onLogoutSuccess={logout}
            />,
        </div>
    );
}

export default googleLogInOut;