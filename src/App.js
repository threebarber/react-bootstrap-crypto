// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import "./App.css";

import apiHelper from "./apiService/apiHelper";
import {
  Button,
  Alert,
  Breadcrumb,
  Card,
  Form,
  Container,
  Row,
  Col,
  ListGroup,
} from "react-bootstrap";

import React, { useState, useEffect } from "react";

import CryptoPanel from './components/cryptoPanel';
import MainContainer from "./components/mainContainer";
import CustomFooter from "./components/footer"



const App = () => {

  const [btcData, setBtcData] = useState({});
  const [ethData, setEthData] = useState({});

 useEffect(() => {
    setBtcData(testData[0]);
    setEthData(testData[1]);
    console.log("Set data")
  }, []);


   /*
  useEffect(() => {
    apiHelper
      .getData()
      .then(responseData => {
        setBtcData(responseData[0])
        setEthData(responseData[1])
      })
  }, []) */


  let testData = [
    {
      "id": "bitcoin",
      "symbol": "btc",
      "name": "Bitcoin",
      "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
      "current_price": 22828,
      "market_cap": 439643610899,
      "market_cap_rank": 1,
      "fully_diluted_valuation": 479123849599,
      "total_volume": 32472091338,
      "high_24h": 23283,
      "low_24h": 22703,
      "price_change_24h": 416.9013624957079,
      "price_change_percentage_24h": -1.79351,
      "market_cap_change_24h": -8517425578.166626,
      "market_cap_change_percentage_24h": -1.90053,
      "circulating_supply": 19269581,
      "total_supply": 21000000,
      "max_supply": 21000000,
      "ath": 69045,
      "ath_change_percentage": -66.93777,
      "ath_date": "2021-11-10T14:24:11.849Z",
      "atl": 67.81,
      "atl_change_percentage": 33564.76938,
      "atl_date": "2013-07-06T00:00:00.000Z",
      "roi": null,
      "last_updated": "2023-01-22T19:37:35.767Z",
      "price_change_percentage_24h_in_currency": -1.7935060447757543,
      "price_change_percentage_7d_in_currency": 8.606134644992744
    },
    {
      "id": "ethereum",
      "symbol": "eth",
      "name": "Ethereum",
      "image": "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
      "current_price": 1643.01,
      "market_cap": 198022723802,
      "market_cap_rank": 2,
      "fully_diluted_valuation": 198022723802,
      "total_volume": 7804089474,
      "high_24h": 1665.52,
      "low_24h": 1615.55,
      "price_change_24h": -20.2190258597941,
      "price_change_percentage_24h": -1.21565,
      "market_cap_change_24h": -2615381552.155548,
      "market_cap_change_percentage_24h": -1.30353,
      "circulating_supply": 120517817.614053,
      "total_supply": 120517817.614053,
      "max_supply": null,
      "ath": 4878.26,
      "ath_change_percentage": -66.27455,
      "ath_date": "2021-11-10T14:24:19.604Z",
      "atl": 0.432979,
      "atl_change_percentage": 379875.94877,
      "atl_date": "2015-10-20T00:00:00.000Z",
      "roi": {
        "times": 95.25269242907038,
        "currency": "btc",
        "percentage": 9525.269242907038
      },
      "last_updated": "2023-01-22T19:37:01.549Z",
      "price_change_percentage_24h_in_currency": -1.2156492554647367,
      "price_change_percentage_7d_in_currency": 6.061415364944603
    }
  ]

  console.log(btcData)
  console.log(typeof btcData)
  console.log(typeof testData)

 
  return (
  
  <div className="App">
    <MainContainer>

    <Row>
      <Col lg="auto">
      <CryptoPanel 
      coin="BTC" 
      img="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Bitcoin-BTC-icon.png" 
      price={btcData.current_price}  
      hourChange={btcData.price_change_24h} 
      hourHigh={btcData.high_24h} 
      hourLow={btcData.low_24h} />
      </Col>
  
      <Col lg="auto">
      <CryptoPanel 
      coin="ETH" 
      img="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Ethereum-ETH-icon.png" 
      price={ethData.current_price} 
      hourChange={ethData.price_change_24h}
      hourHigh={ethData.high_24h}
      hourLow={ethData.low_24h}
      />
      </Col>
    </Row>

    <CustomFooter />

    </MainContainer>
  </div>

  )
};

export default App;
