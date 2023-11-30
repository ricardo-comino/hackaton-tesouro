import * as React from "react";
import { navigate } from "gatsby";
import "./styles.css";
import {
  Button,
  TextField,
  IconButton,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  FormControl,
} from "@mui/material/";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Logo from "../images/logo_cripto_titulo.svg";

const IndexPage = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  const handleClick = () => {
    navigate("/titulos");
  };

  return (
    <main className="main flex">
      <div className="card">
        <img src={Logo} alt="Logo Cripto Título" width={144} />
        <TextField label="E-mail" variant="outlined" className="full" />
        <FormControl variant="outlined" className="full">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <Button
          onClick={() => handleClick()}
          variant="contained"
          className="full black"
          size="large"
        >
          Avançar
        </Button>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Cripto Títulos</title>;
