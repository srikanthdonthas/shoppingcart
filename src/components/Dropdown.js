import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import db from "../firebase";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing(0),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 545,
  },
}));

export default function Dropdown(props) {
  const classes = useStyles();
  const [vendors, setVendors] = useState([]);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    db.collection("vendors").onSnapshot((snapshot) =>
      setVendors(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          vendor: doc.data(),
        }))
      )
    );
  }, []);
  return (
    <div>
      <Button className={classes.button} onClick={handleOpen} />
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Vendors</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={props.value}
          onChange={props.onChange}
        >
          {vendors.map(({ id, vendor }) => {
            return <MenuItem value={`${id}`}>{vendor.name}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </div>
  );
}
