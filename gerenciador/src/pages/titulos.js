import React, { useState } from "react";
import { MenuItem, FormControl, Select, InputLabel } from "@mui/material/";
import "./styles.css";
import jsonList from "../json/titulos.json";
import Logo from "../images/logo_small_cripto_titulo.svg";
import List from "../components/list";

const Titulos = () => {
  const [filter, setFilter] = useState("Todos");

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <>
      <main className="main">
        <header className="header">
          <img src={Logo} alt="Logo Cripto Título" />
        </header>
        <div className="container">
          <div className="titleFilter">
            <h1>Garantias</h1>
            <FormControl fullWidth className="filter" size="small">
              <InputLabel id="select-label">Filtro</InputLabel>
              <Select
                labelId="select-label"
                id="select"
                value={filter}
                label="Filtro"
                onChange={handleChange}
              >
                <MenuItem value={"Todos"}>Todos</MenuItem>
                <MenuItem value={"Bloqueados"}>Bloqueados</MenuItem>
                <MenuItem value={"Executados"}>Executados</MenuItem>
              </Select>
            </FormControl>
          </div>
          <List json={jsonList} />
        </div>
      </main>
    </>
  );
};

export default Titulos;

export const Head = () => <title>Cripto Títulos</title>;
