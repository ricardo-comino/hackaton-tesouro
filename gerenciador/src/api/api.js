import axios from "axios";

export const apiBlockchain = axios.create({
  baseURL: "https://api-testnet.polygonscan.com/",
});

apiBlockchain.interceptors.request.use(function (config) {
  config.headers["Access-Control-Allow-Origin"] = "*";

  return config;
});