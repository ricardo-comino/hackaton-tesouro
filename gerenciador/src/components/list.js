import React from "react";
import { Button } from "@mui/material/";
import "../pages/styles.css";
import { navigate } from "gatsby";

const List = ({ json }) => {
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
              <div className="col right">
                <Button
                  onClick={() => navigate(`/detalhe-titulo?id=${item.id}`)}
                  variant="contained"
                  className="black"
                  size="medium"
                >
                  Ver detalhes
                </Button>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
