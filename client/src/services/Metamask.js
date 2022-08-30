import { useState, useEffect } from "react";
import metamask from "../assets/Icons/metamask.svg";

function App() {
  const [currentAccount, setCurrentAccount] = useState(null);

  const checkWalletIsConnected = async () => {
    const { ethereum } = window;

    const accounts = await ethereum.request({ method: "eth_accounts" });
    console.log(accounts);
    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Cuenta autorizada: ", account);
      setCurrentAccount(account);
    } else {
      console.log("No se encontró ninguna cuenta autorizada!");
    }
  };

  const connectWalletHandler = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      alert("Por favor, instala Metamask!"); //"https://metamask.io/download/"
      return;
    }

    try {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("Cuenta añadida! Dirección: ", accounts[0]); //numero de cuenta en accounts
      setCurrentAccount(accounts[0]);
    } catch (err) {
      console.log(err);
    }
  };

  const connectWalletButton = () => {
    return (
      <button
        onClick={connectWalletHandler}
        className="btn border-0 bg-second-blue hover:bg-main-blue"
      >
        <img src={metamask} className="mr-2" alt="metamask" />
        Metamask
      </button>
    );
  };

  useEffect(() => {
    checkWalletIsConnected();
  }, []);

  return (
    <article class="indicator">
      {/* ¿ Online or Offline ? */}
      <span
        class={`indicator-item badge ${
          currentAccount
            ? "badge-success bg-second-green text-main-white"
            : "badge-error bg-second-red text-main-white"
        }`}
      >
        {currentAccount ? "Online" : "Offline"}
      </span>

      {/* Button to Connect */}
      <div className="div-wallet-button">
        {currentAccount ? (
          <button
            onClick={connectWalletHandler}
            className="btn border-0 btn-glass btn-disabled bg-second-blue hover:bg-main-blue text-main-white"
          >
            <img src={metamask} className="mr-2" alt="metamask" />
            Metamask
          </button>
        ) : (
          connectWalletButton()
        )}
      </div>
    </article>
  );
}

export default App;
