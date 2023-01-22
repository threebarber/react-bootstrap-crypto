import axios from "axios";
const baseUrl =
  "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum&vs_currencies=usd";

const getData = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data)
  .catch(error => {
    console.log(error.message)
  })
};

export default { getData };
