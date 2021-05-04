import React, { useEffect, useState } from "react";
import db from "../../firebase";
import styled from "styled-components";
import { Button, IconButton, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
});
function Product({ match }) {
  const productId = match.params.id;
  const classes = useStyles();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    db.collection("products")
      .doc(productId)
      .get()
      .then(function (doc) {
        if (doc.exists) {
          setProduct(doc.data());
        }
      })
      .catch(function (error) {
        //console.log("Error getting document:", error);
      });
  }, [productId]);

  return (
    <Container>
      <LeftContainer>
        <img src={product.productPic} alt="" />
      </LeftContainer>
      <RightContainer>
        <h1>{`Product Name : ${product.name}`}</h1>
        <h1>{`Product Price : ₹${product.price}`}</h1>
        <h1>{`product Details : ${product.details}`}</h1>
        <Buttons>
          <IconButton className={classes.root}>
            <Button variant="contained" disableRipple>
              ADD TO CART
            </Button>
          </IconButton>
          <IconButton className={classes.root}>
            <Button variant="contained" color="primary">
              BUY NOW
            </Button>
          </IconButton>
        </Buttons>
      </RightContainer>
    </Container>
  );
}

export default Product;

const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  padding-top: 50px;
`;
const LeftContainer = styled.div`
  padding: 100px;
  flex: 0.5;
  > img {
    width: 400px;
    height: 400px;
  }
`;
const RightContainer = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;
  flex: 0.4;
  h1 > {
    display: flex;
    flex: 1;
    align-items: center;
    flex-direction: row;
  }
`;
const Buttons = styled.div`
  display: flex;
  padding: 10px;
  justify-content: space-evenly;
`;
