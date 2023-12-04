import React from "react";
import Web3 from "web3";
import { Button } from "@mui/material/";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles.css";
import Logo from "../images/logo_small_cripto_titulo.svg";
import { navigate } from "gatsby";
import ABI_TreasureEscrow from "../json/ABI_TreasureEscrow.json";

const DetalheTitulo = () => {
  const totalWallet = async () => {
    let API_URL =
      "https://polygon-mumbai.infura.io/v3/059b5af27cf84f8686a92bcd0dcea236";
    let contractAddress = "0xC55755Ce558F6BBC817c35131f99Ab43fF0058d2";

    const web3 = new Web3(API_URL);
    const contract = new web3.eth.Contract(ABI_TreasureEscrow, contractAddress);
    const walletB3 = "0xe7647be191be8645d99c35d9459b4661755a6f58";

    try {
      const total = await contract.methods.getLockedBalance(walletB3).call();
      const convertHex = web3.utils.toHex(total);
      toast.success(
        `O valor em garantia é R$ ${web3.utils
          .hexToNumber(convertHex)
          .toLocaleString("pt-BR")}`
      );
    } catch {
      toast.warn(`Houve um erro inesperado`);
    }
  };

  const executarGarantia = async () => {
    toast.success(`O valor transferido com sucesso`);
  };

  return (
    <>
      <main className="main">
        <header className="header">
          <img src={Logo} alt="Logo Cripto Título" />
        </header>
        <div className="container">
          <div className="titleFilter">
            <h1>Detalhe do Cripto Título</h1>
          </div>
          <ul className="list">
            <li className="itemList">
              <div className="line"></div>
              <div className="wrapContent">
                <div className="wrapText">
                  <div className="col">
                    <h2 className="center">Cripto Título IPCA 2026</h2>
                  </div>
                </div>
                <div className="wrapText">
                  <div className="col">
                    <p>
                      <b>Cliente:</b> José Marques
                    </p>
                    <p>
                      <b>CPF:</b> 269.875.968-78
                    </p>
                  </div>
                  <div className="col right">
                    <div className="wrapText">
                      <div className="col right">
                        <Button
                          onClick={() => totalWallet()}
                          variant="outlined"
                          className="outlined"
                          size="medium"
                        >
                          Consultar garantia
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div className="wrapButton">
            <Button
              onClick={() => navigate("/titulos")}
              variant="outlined"
              className="outlined"
              size="medium"
            >
              Voltar
            </Button>
            <Button
              onClick={() => executarGarantia()}
              variant="contained"
              className="black"
              size="medium"
            >
              Executar
            </Button>
          </div>
        </div>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </main>
    </>
  );
};

export default DetalheTitulo;

export const Head = () => <title>Detalhe Cripto Título</title>;
