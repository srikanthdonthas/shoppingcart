import React from "react";
import db from "../../firebase";
import styled from "styled-components";

function Product({ match }) {
  console.log();
  db.collection("products")
    .doc()
    .get()
    .then(function (doc) {
      if (doc.exists) {
        console.log(doc.data());
      }
    })
    .catch(function (error) {
      console.log("Error getting document:", error);
    });

  return (
    <div>
      <Container>
        <h1>srikanth</h1>
      </Container>
    </div>
  );
}

export default Product;
const Container = styled.div``;
