import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button, IconButton, TextField, makeStyles } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import db from "../firebase";
import Dropdown from "./Dropdown";

const useStyles = makeStyles({
  root: {
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
});

const ProductsInfoData = (props) => {
  const classes = useStyles();
  const [details, setDetails] = useState();
  const [price, setPrice] = useState();
  const [name, setName] = useState();
  const [productPic, setProductPic] = useState();
  const [open, setOpen] = useState(false);
  const [id, setId] = useState();
  const [data, setData] = useState();

  const updateProduct = () => {
    db.collection("products")
      .doc(props.id)
      .set(
        {
          name: name,
          details: details,
          productPic: productPic,
          price: price,
          vendor: { data, id },
        },

        { merge: true }
      )
      .then(() => {
        //console.log("Document successfully updated!");
      })
      .catch((error) => {
        //console.error("Error removing document: ", error);
      });
    setOpen(false);
  };

  useEffect(() => {
    db.collection("vendors")
      .doc(id)
      .get()
      .then((doc) => {
        setData(doc.data());
      });
  }, [id]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Modal>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Update Product</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              onChange={(e) => setName(e.target.value)}
              id={`${props.product.name}`}
              label="Product Name"
              defaultValue={`${props.product.name}`}
              type="text"
              fullWidth
            />
            <TextField
              margin="dense"
              id={`${props.product.productPic}`}
              onChange={(e) => setProductPic(e.target.value)}
              defaultValue={`${props.product.productPic}`}
              label="Product Image"
              type="img"
              fullWidth
            />
            <TextField
              margin="dense"
              id={`${props.product.price}`}
              onChange={(e) => setPrice(e.target.value)}
              defaultValue={`${props.product.price}`}
              label="Price"
              type="number"
              fullWidth
            />
            <TextField
              margin="dense"
              id={`${props.product.details}`}
              onChange={(e) => setDetails(e.target.value)}
              defaultValue={`${props.product.details}`}
              label="Description"
              type="text"
              fullWidth
            />
            <Dropdown value={id} onChange={(e) => setId(e.target.value)} />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={updateProduct} color="primary">
              Update
            </Button>
          </DialogActions>
        </Dialog>
      </Modal>
      <Container>
        <Box>
          <img src={props.product.productPic} alt="" width="250" height="200" />
          <h1>{`${props.product.name}`}</h1>
          <h2>{`₹${props.product.price}`}</h2>
          <h3>{`Details:${props.product.details}`}</h3>
          <Buttons>
            <IconButton className={classes.root}>
              <Button
                variant="outlined"
                color="primary"
                onClick={handleClickOpen}
              >
                Edit
              </Button>
            </IconButton>
            <IconButton className={classes.root}>
              <Button
                variant="outlined"
                onClick={(e) =>
                  db
                    .collection("products")
                    .doc(props.id)
                    .delete()
                    .then(() => {
                      //console.log(`Document successfully deleted!${props.id}`);
                    })
                    .catch((error) => {
                      //console.error("Error removing document: ", error);
                    })
                }
              >
                DELETE
              </Button>
            </IconButton>
          </Buttons>
        </Box>
      </Container>
    </>
  );
};

export default ProductsInfoData;
const Modal = styled.div``;
const Buttons = styled.div``;

const Container = styled.div`
  display: flex;
  padding: 10px;
  place-items: center;
  justify-content: space-evenly;
`;
const Box = styled.div`
  padding: 15px;
  height: 100%;
  width: 100%;
  display: flex;
  padding-bottom: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding-top: 50px;
  border-radius: 5px;
  box-shadow: 0px 4px 14px -3px rgba(0, 0, 0, 0.2);
  > img {
    align-items: center;
  }
  > h1 {
    flex: 1;
    font-size: 20px;
  }
  > h3 {
    flex: 1;
    font-size: 15px;
  }
  > h2 {
    font-size: 18px;
  }
`;
