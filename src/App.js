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
          <Route exact path="/">
            <UserProductData />
          </Route>
          <Route exact path="/product">
            <ProductsInfo />
          </Route>
          <Route path="/product/:id" component={Product}></Route>
          <Route exact path="/vendor">
            <VendorInfo />
          </Route>
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
