import React, { useState } from "react";
import { Tabs, Tab, Table, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./App.css";
import axios from "axios";
import Navbar from "./Navbar.js";
import PasswordChecklist from "react-password-checklist";
import Footer from "./Footer.js";
async function get1(url) {
  let response = await fetch(url);
  let data = await response.json();
  return data;
}

const Login = () => {
  document.onkeydown = function (e) {
    if (e.keyCode == 123) {
      return false;
    }
    if (
      e.ctrlKey &&
      e.shiftKey &&
      (e.keyCode == "I".charCodeAt(0) || e.keyCode == "i".charCodeAt(0))
    ) {
      return false;
    }
    if (
      e.ctrlKey &&
      e.shiftKey &&
      (e.keyCode == "C".charCodeAt(0) || e.keyCode == "c".charCodeAt(0))
    ) {
      return false;
    }
    if (
      e.ctrlKey &&
      e.shiftKey &&
      (e.keyCode == "J".charCodeAt(0) || e.keyCode == "j".charCodeAt(0))
    ) {
      return false;
    }
    if (
      e.ctrlKey &&
      (e.keyCode == "U".charCodeAt(0) || e.keyCode == "u".charCodeAt(0))
    ) {
      return false;
    }
    if (
      e.ctrlKey &&
      (e.keyCode == "S".charCodeAt(0) || e.keyCode == "s".charCodeAt(0))
    ) {
      return false;
    }
  };
  var CryptoJS = require("crypto-js");
  const [users, setUsers] = useState([]);
  async function reload() {
    let data = await get1("https://azertyha87.pythonanywhere.com/user");
    setUsers(data);
  }

  const [credential, setcredential] = useState("");
  function onChangecredential(e) {
    setcredential(e.target.value);
    reload();
  }
  const [password, setPassword] = useState("");
  function onChangepassword(e) {
    setPassword(e.target.value);
    reload();
  }

  function onlogin(credential, password) {
    const rand = "randomizer";
    const encrypt = (content, randi) =>
      CryptoJS.AES.encrypt(JSON.stringify({ content }), randi).toString();
    reload();
    var state = false;
    for (var i = 0; i < users.length; i++) {
      var obj = users[i];
      if (credential === obj["Username"] || credential === obj["Email"]) {
        if (password === obj["Password"]) {
          var encri = encrypt(users[i]["User_ID"], rand);
          window.location = "/Dashboard/" + encri;
          state = true;
        }
      }
    }
    if (!state) {
      alert("No account with the entered credentials");
    }
  }

  return (
    <div>
      <Navbar />

      <br />
      <br />
      <br />
      <br />
      <div
        id="r"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <br />
        <br />
        <br />
        <br />
        <div className="display_center">
          <form>
            <div
              className="p-5 rounded "
              style={{ backgroundColor: "rgba(132, 140, 169, 0.5)" }}
            >
              <h3
                className="m-3 d-flex justify-content-center"
                style={{ color: "white" }}
              >
                Login
              </h3>
              <h5 className="m-3 d-flex" style={{ color: "white" }}>
                Email or Username :
              </h5>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                name="credentialregister"
                value={credential}
                required
                onChange={onChangecredential}
              />
              <br />
              <h5 className="m-3 d-flex" style={{ color: "white" }}>
                Password :
              </h5>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                name="passwordregister"
                value={password}
                required
                onChange={onChangepassword}
              />
              <br />
              <PasswordChecklist
                rules={["minLength", "maxLength", "number"]}
                minLength={7}
                maxLength={18}
                value={password}
                onChange={(isValid) => {}}
              />
              <br />
              <button
                type="button"
                className="btn btn-primary "
                onClick={() => onlogin(credential, password)}
              >
                Login
              </button>
            </div>
          </form>
        </div>
        <br />
        <br />
        <br />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default Login;
