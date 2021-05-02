import React, { useEffect, useState } from "react";
import styled from "styled-components";
import db from "../firebase";
import firebase from "firebase";
import VendorInfoData from "./VendorInfoData";

function VendorInfo() {
  const [details, setDetails] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    db.collection("vendors")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setVendors(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            vendors: doc.data(),
          }))
        )
      );
  }, []);

  const allvendors = (event) => {
    event.preventDefault();
    db.collection("vendors").add({
      name,
      details,
      profilePic,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setName("");
    setDetails("");
    setProfilePic("");
  };

  return (
    <Container>
      <LeftContainer>
        {vendors.map(({ id, vendors }) => (
          <VendorInfoData id={id} vendor={vendors} />
        ))}
      </LeftContainer>
      <RightContainer>
        <form>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Vendor Name"
            type="text"
          />
          <input
            value={profilePic}
            onChange={(e) => setProfilePic(e.target.value)}
            placeholder="Vendor pic url"
            type="img"
          />
          <input
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder="Details"
            type="text"
          />
          <button type="submit" onClick={allvendors} disabled={!name}>
            Save
          </button>
        </form>
      </RightContainer>
    </Container>
  );
}

export default VendorInfo;

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
  display: grid;
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
