import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from "gapi-script";
import axios from 'axios';
import Google from "../../assets/Icons/google.svg";

function googleLogInOut() {
  
  gapi.load("client:auth2", () => {
    gapi.client.init({
      clientId: process.env.REACT_APP_GOOGLE_ID,
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

  // const logout = (response) => {
  //   gapi.auth2.getAuthInstance().signOut();
  // };

  return (
    <div className="App">
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_ID}
        render={renderProps => (
          <button onClick={renderProps.onClick} disabled={renderProps.disabled}
            className="flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-2  rounded-full text-black font-semibold text-lg  border-white w-full bg-main-gray m-2"

          ><img src={Google} alt="Google icon" />
            Continuar con Google
          </button>
        )}
        buttonText="Login"
        onSuccess={handleGoogleLogin}
        onFailure={handleGoogleLogin}
        cookiePolicy={'single_host_origin'}
      />

      {/* <GoogleLogout
            clientId={process.env.REACT_APP_GOOGLE_ID}
            buttonText="Logout"
            onLogoutSuccess={logout}
            />, */}
    </div>
  );
}

export default googleLogInOut;