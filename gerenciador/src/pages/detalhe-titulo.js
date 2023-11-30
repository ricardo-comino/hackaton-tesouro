import React from "react";
import { Button } from "@mui/material/";
import "./styles.css";
import Logo from "../images/logo_small_cripto_titulo.svg";
import { navigate } from "gatsby";

const DetalheTitulo = () => {
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
            <Button variant="contained" className="black" size="medium">
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
