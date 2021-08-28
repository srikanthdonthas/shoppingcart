import React, { useEffect, useState } from "react";
import styled from "styled-components";
import db from "../firebase";
import UserProductDataItems from "./UserProductDataItems";

function UserProductData() {
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

  return (
    <Container>
        <img style={{width:'50%'}} src="https://images.pexels.com/photos/982263/pexels-photo-982263.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
      <ShopingList>
        {products.map(({ id, product }) => (
          <UserProductDataItems product={product} id={id} />
        ))}
      </ShopingList>
    </Container>
  );
}

export default UserProductData;
const Container = styled.div`
  display: flex;
  padding-top: 40px;
`;
const ShopingList = styled.div`
  display: flex;
  flex: 1;
  position: relative;
  flex-flow: row wrap;
  padding: 30px;
  justify-content: flex-start;
`;
