import { Button, IconButton, makeStyles } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

import styled from "styled-components";

const useStyles = makeStyles({
  root: {
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
});

function UserProductDataItems(props) {
  const history = useHistory();
  const classes = useStyles();

  return (
    <Container>
      <Box>
        <div>
          <img src={props.product.productPic} alt="" width="250" height="150" />
        </div>
        <h1>
          <Link onClick={() => history.push(`/product/${props.id}`)}>
            {props.product.name}
          </Link>
        </h1>
        <h3>{props.product.details}</h3>
        <h2>{`Price: ₹ ${props.product.price}`}</h2>
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
      </Box>
    </Container>
  );
}

export default UserProductDataItems;

const Container = styled.div`
  padding: 10px;
  display: flex;
`;
const Box = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 10px;
  padding-bottom: 40px;
  padding-top: 50px;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0px 4px 14px -3px rgba(0, 0, 0, 0.2);
  > div {
    width: auto;
    height: 100%;
    align-items: center;
  }
  > div > img {
    align-items: center;
  }
  > h1 {
    cursor: pointer;
    display: block;
    padding-bottom: 10px;
    align-items: center;
    font-size: 20px;
  }
  > h3 {
    align-items: left;
    color: #006bb6;
    font-weight: normal;
    width: 100%;
    font-size: 18px;
    padding: 3px 0px 10px 0px;
    border-left: 3px solid #c6c1b8;
    background: #f2efe9;
    display: inline-block;
    //flex-direction: column;
  }
  > h2 {
    display: block;
    padding: 10px;
    align-items: center;
    font-size: 18px;
  }
`;
const Buttons = styled.div`
  display: flex;
  padding: 10px;
  justify-content: space-evenly;
`;
