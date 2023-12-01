import React from "react";
import Web3 from "web3";
import { Button } from "@mui/material/";
import "./styles.css";
import Logo from "../images/logo_small_cripto_titulo.svg";
import { navigate } from "gatsby";
import ABI_TreasureEscrow from "../json/ABI_TreasureEscrow.json";

const DetalheTitulo = () => {


  const onConnect = async () => {
    let API_URL = "https://polygon-mumbai.infura.io/v3/059b5af27cf84f8686a92bcd0dcea236";
    let contractAddress = "0xC55755Ce558F6BBC817c35131f99Ab43fF0058d2";

    const web3 = new Web3(API_URL);
    const contract = new web3.eth.Contract(ABI_TreasureEscrow, contractAddress);
    const walletB3 = "0x8FF646169760848FeEE5a3E7B7C405AC57c9ae47";

    // const valueBlock = web3.utils.toHex("234");
    // await contract.methods.ExecutarOrdemSaque(valueBlock, walletB3).call();
    await contract.methods.getLockedBalance(walletB3).call();
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
                        <p>
                          <b>Quantidade:</b> 6,14 unidades
                        </p>
                        <p>
                          <b>Garantia:</b> R$ 9.007,32
                        </p>
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
              onClick={() => onConnect()}
              variant="contained"
              className="black"
              size="medium"
            >
              Executar
            </Button>
          </div>
        </div>
      </main>
    </>
  );
};

export default DetalheTitulo;

export const Head = () => <title>Detalhe Cripto Título</title>;
