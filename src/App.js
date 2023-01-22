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



const App = () => {

  const jsonData =  {

    "bitcoin":
    {
      "usd": 2345
    },

    "ethereum":
    {
      "usd":1676
    }


  }
  

  const [cryptoData, setCryptoData] = useState("");

  /*
  useEffect(() => {
    apiHelper
      .getData()
      .then(responseData => {
        setCryptoData(responseData)
        console.log(responseData)
      })
  }, [])
*/

/*
  useEffect(() => {
    setCryptoData(jsonData);
    console.log(cryptoData);
    console.log("123");
  }, []);*/


  return (
  
  <div className="App">
    <MainContainer>
    <Row>
      <Col>
      <CryptoPanel coin="BTC" img="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Bitcoin-BTC-icon.png" hour="+538" average="22,000" />
      </Col>
      <Col>
      <CryptoPanel coin="ETH" img="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Ethereum-ETH-icon.png" hour="+297" average="1567" />
      </Col>
    </Row>
    </MainContainer>
  </div>

  )
};

export default App;
