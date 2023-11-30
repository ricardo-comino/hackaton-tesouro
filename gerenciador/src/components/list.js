import React, { useEffect, useState } from "react";
import { Button } from "@mui/material/";
import "../pages/styles.css";
import { navigate } from "gatsby";

const List = ({ json }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalSum = json.reduce((total, item) => {
      return item.value + total;
    }, 0);

    setTotal(totalSum.toLocaleString("pt-BR"));
  }, [json]);

  return (
    <ul className="list">
      {json?.map((item) => {
        return (
          <li key={item.id} className="itemList">
            <div className="line"></div>
            <div className="wrapText">
              <div className="col">
                <p>
                  <b>Cliente: </b> {item.name}
                </p>
                <p>
                  <b>Vencimento:</b> {item.expiration}
                </p>
              </div>
              <div className="col small">
                <div className="wrapText">
                  <div className="col">
                    <p>Garantia:</p>
                    <h2>
                      <b>R$ {item.value.toLocaleString("pt-BR")}</b>
                    </h2>
                  </div>
                  <div className="col right">
                    <Button
                      onClick={() => navigate(`/detalhe-titulo?id=${item.id}`)}
                      variant="contained"
                      className="black"
                      size="medium"
                    >
                      Executar
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </li>
        );
      })}
      <li className="itemTotal">
        <p>Valor total</p>
        <p>
          <b>R$ {total}</b>
        </p>
      </li>
    </ul>
  );
};

export default List;
