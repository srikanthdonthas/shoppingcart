import React, { useEffect, useState } from "react";
import styled from "styled-components";
import db from "../firebase";
import firebase from "firebase";
import ProductsInfoData from "./ProductsInfodata";

function ProductsInfo() {
  const [details, setDetails] = useState("");
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [productPic, setProductPic] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    db.collection("products")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setProducts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            product: doc.data(),
          }))
        )
      );
  }, []);

  const addProducts = (e) => {
    e.preventDefault();
    db.collection("products").add({
      name,
      price,
      details,
      productPic,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setName("");
    setDetails("");
    setProductPic("");
    setPrice("");
  };

  return (
    <Container>
      <LeftContainer>
        <h1>{name}</h1>
        {products.map(({ id, product }) => (
          <ProductsInfoData product={product} id={id} />
        ))}
      </LeftContainer>
      <RightContainer>
        <form>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Product Name"
            type="text"
          />
          <input
            value={productPic}
            onChange={(e) => setProductPic(e.target.value)}
            placeholder="Product pic url"
            type="text"
          />
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Product Price"
            type="number"
          />
          <input
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder="Details"
            type="text"
          />
          <button type="submit" onClick={addProducts} disabled={!name}>
            Save Product
          </button>
        </form>
      </RightContainer>
    </Container>
  );
}

export default ProductsInfo;

const Container = styled.div`
  display: flex;
  padding-top: 50px;
`;
const LeftContainer = styled.div`
  display: flex;
  flex: 0.7;
  width: 50%;
  height: 50%;
  flex-direction: row;
  position: relative;
  flex-flow: row wrap;
  padding: 50px;
  justify-content: flex-start;
  align-content: start;
  align-items: center;
`;
const RightContainer = styled.div`
  display: flex;
  flex: 0.3;
  place-items: center;
  margin-left: auto;
  margin-right: auto;
  padding-top: 100px;
  padding-bottom: 100px;

  form {
    display: flex;
    flex-direction: column;
    padding: 20px;
    position: fixed;
    top: 80px;
    right: 0;
  }

  > form > input {
    width: 400px;
    height: 50px;
    padding-left: 10px;
    font-size: 20px;
    margin-bottom: 10px;
    border-radius: 5px;
  }
  > form > button {
    width: 415px;
    height: 50px;
    font-size: large;
    color: white;
    background-color: #657deb;
    border-radius: 5px;
    cursor: pointer;
  }
`;
