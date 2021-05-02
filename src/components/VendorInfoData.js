import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  makeStyles,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";
import styled from "styled-components";
import db from "../firebase";

const useStyles = makeStyles({
  root: {
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
});
function VendorInfoData(props) {
  const classes = useStyles();
  const [name, setName] = useState();
  const [details, setDetails] = useState();
  const [profilePic, setProfilePic] = useState();
  const [open, setOpen] = useState(false);

  const updateVendor = () => {
    db.collection("vendors")
      .doc(props.id)
      .set(
        {
          name,
          details,
          profilePic,
        },
        { merge: true }
      )
      .then(() => {
        console.log("Document successfully updated!");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
    setOpen(false);
  };

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
          <DialogTitle id="form-dialog-title">Update Vendor</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              onChange={(e) => setName(e.target.value)}
              id={`${props.vendor.name}`}
              label="vendor Name"
              defaultValue={`${props.vendor.name}`}
              type="text"
              fullWidth
            />
            <TextField
              margin="dense"
              id={`${props.vendor.profilePic}`}
              onChange={(e) => setProfilePic(e.target.value)}
              defaultValue={`${props.vendor.profilePic}`}
              label="Vendor Image"
              type="img"
              fullWidth
            />
            <TextField
              margin="dense"
              id={`${props.vendor.details}`}
              onChange={(e) => setDetails(e.target.value)}
              defaultValue={`${props.vendor.details}`}
              label="Description"
              type="text"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={updateVendor} color="primary">
              Update
            </Button>
          </DialogActions>
        </Dialog>
      </Modal>
      <Container>
        <Box>
          <img src={props.vendor.profilePic} alt="" width="250" height="200" />
          <h1>{`Name:${props.vendor.name}`}</h1>
          <h1>{`Details:${props.vendor.details}`}</h1>
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
                    .collection("vendors")
                    .doc(props.id)
                    .delete()
                    .then(() => {
                      console.log(`Document successfully deleted!${props.id}`);
                    })
                    .catch((error) => {
                      console.error("Error removing document: ", error);
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
}

export default VendorInfoData;
const Buttons = styled.div``;
const Modal = styled.div``;

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
`;
