import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import Product from "./components/product/Product";
import ProductsInfo from "./components/ProductsInfo";
import UserProductData from "./components/UserProductData";
import VendorInfo from "./components/VendorInfo";

function App() {
  return (
    <Router>
      <Container>
        <Header />
        <Switch>
          <Route exact path="/" component={UserProductData} />
          <Route exact path="/product" component={ProductsInfo} />
          <Route path="/product/:id" component={Product} />
          <Route exact path="/vendor" component={VendorInfo} />
        </Switch>
      </Container>
    </Router>
  );
}
export default App;

const Container = styled.div`
  margin: 0;
  overflow: hidden;
`;
