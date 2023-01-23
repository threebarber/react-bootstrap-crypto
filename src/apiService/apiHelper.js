import axios from "axios";
const baseUrl =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&ids=ethereum%2Cbitcoin&per_page=100&page=1&sparkline=false&price_change_percentage=24h%2C7d";

const getData = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data)
  .catch(error => {
    console.log(error.message)
  })
};

export default { getData };
