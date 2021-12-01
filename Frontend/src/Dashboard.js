import React, { useState } from "react";
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import "./App.css";
import Footer from "./Footer.js";
import { useLocation } from "react-router-dom";
import { Table, Row, Col } from "react-bootstrap";
import axios from "axios";
import logo from "./images1.png";
async function get1(url) {
  let response = await fetch(url);
  let data = await response.json();
  return data;
}
const Nav = styled.nav`
  background-color: #004380;
  height: 100px;
  width: 100%;
  display: flex;
  text-decoration: none;
  z-index: 10;
`;
const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 0.5rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #fff;
    text-decoration: none;
  }
  &:hover {
    color: #7595ae;
    text-decoration: none;
  }
`;
async function addusertoserver(url, server, id) {
  var obj = server["List_of_Users"];
  obj[id] = id;
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      Server_ID: server["Server_ID"],
      Server_name: server["Server_name"],
      Admin: server["Admin"],
      List_of_Users: obj,
      List_of_Channels: server["List_of_Channels"],
    }),
  };
  fetch(url, requestOptions);
}
async function removeuserfromoserver(url, server, id) {
  var obj = server["List_of_Users"];
  delete obj[id.toString()];
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      Server_ID: server["Server_ID"],
      Server_name: server["Server_name"],
      Admin: server["Admin"],
      List_of_Users: obj,
      List_of_Channels: server["List_of_Channels"],
    }),
  };
  fetch(url, requestOptions);
}

async function post1(url, servername, admin, listofusers, listofchannels) {
  const json = JSON.stringify({
    Server_name: servername,
    Admin: admin,
    List_of_Users: listofusers,
    List_of_Channels: listofchannels,
  });
  const res = await axios.post(url, json, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
const Dashboard = () => {
  var CryptoJS = require("crypto-js");
  const [Servers, setservers] = useState([]);
  const [User, setuser] = useState([]);
  const [state, setstate] = useState(true);
  async function reload() {
    if (state && User.length === 0 && Servers.length === 0) {
      let data = await get1("https://azertyha87.pythonanywhere.com/server");
      setservers(data);
      let data1 = await get1("https://azertyha87.pythonanywhere.com/user");
      setuser(data1);
      setstate(false);
    }
  }

  function getusername(id) {
    if (User.length !== 0) {
      reload();
    }
    for (var i = 0; i < User.length; i++) {
      if (User[i]["User_ID"] === id) {
        return User[i]["Username"];
      }
    }
    return "";
  }
  reload();
  const [Servername, setservername] = useState("");
  function onChangeservername(e) {
    setstate(true);
    setservername(e.target.value);
    reload();
  }
  const [invite, setinvite] = useState("");
  function onChangeinvite(e) {
    setstate(true);
    setinvite(e.target.value);
    reload();
  }
  const rand = "randomizer";
  var CryptoJS = require("crypto-js");
  const decrypt = (crypted, randi) =>
    JSON.parse(CryptoJS.AES.decrypt(crypted, randi).toString(CryptoJS.enc.Utf8))
      .content;
  var encri = useLocation().pathname.replace("/Dashboard/", "");
  var decrypted = decrypt(encri, rand);
  async function joinuser(server, dec) {
    await addusertoserver(
      "https://azertyha87.pythonanywhere.com/server",
      server,
      dec
    );
  }
  function makekey(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  async function joinuser(server, dec) {
    await addusertoserver(
      "https://azertyha87.pythonanywhere.com/server",
      server,
      dec,
      dec
    );
    setstate(true);
    setuser([]);
    setservers([]);
    await reload();
  }
  async function Leave(server, dec) {
    await removeuserfromoserver(
      "https://azertyha87.pythonanywhere.com/server",
      server,
      dec
    );
    setstate(true);
    setuser([]);
    setservers([]);
    await reload();
  }
  async function postit() {
    if (Servername === "") {
      return;
    }
    for (var i = 0; i < Servers.length; i++) {
      if (Servers[i]["Server_name"] === Servername) {
        alert("There already exists a server with this name!");
        return;
      }
    }
    var obj1 = { 1: decrypted };
    var obj2 = { Global: "", key: makekey(8) };
    let data = await post1(
      "https://azertyha87.pythonanywhere.com/server",
      Servername,
      decrypted,
      obj1,
      obj2
    );
    setstate(true);
    setuser([]);
    setservers([]);
    await reload();
  }
  const [loc, setloc] = useState(useLocation().pathname);
  const Join = (id) => {
    const rand = "randomizer";
    const encrypt = (content, randi) =>
      CryptoJS.AES.encrypt(JSON.stringify({ content }), randi).toString();
    var vari = encrypt(id, rand);
    var vari1 = loc.replace("/Dashboard", "");
    window.location = "/Server/" + vari + "-////-" + vari1;
  };

  async function joinit() {
    const rand = "randomizer";
    const encrypt = (content, randi) =>
      CryptoJS.AES.encrypt(JSON.stringify({ content }), randi).toString();
    var encri;
    for (var i = 0; i < Servers.length; i++) {
      encri = encrypt(Servers[i]["Server_ID"], rand);
      if (invite === Servers[i]["List_of_Channels"]["key"]) {
        var idx;
        for (const [key, value] of Object.entries(
          Servers[i]["List_of_Users"]
        )) {
          idx = parseInt(key);
          if (value === decrypted) {
            alert("You already are a member of this server");
            return;
          }
        }
        let data3 = await joinuser(Servers[i], decrypted);
        setstate(true);
        setuser([]);
        setservers([]);
        reload();
        return;
      }
    }
    alert("Server invite not valid");
  }
  function is_in_server(lst) {
    for (const [key, value] of Object.entries(lst)) {
      if (value === decrypted) {
        return true;
      }
    }
    return false;
  }
  return (
    <div>
      <Nav>
        <li style={{ marginTop: 5 }}>
          <a href="/">
            <img height="90" src={logo} alt="" onClick="/" />
          </a>
        </li>
        <NavLink
          style={{ marginTop: -10, fontSize: 100, marginRight: "60px" }}
          to="/"
        >
          <h1 className="font-link" style={{ fontSize: 25 }} onClick="/">
            JConnect.
          </h1>
        </NavLink>
      </Nav>
      <Row>
        <Col>
          <Link to={"/"} activeClassName="active">
            Sign out
          </Link>
        </Col>
        <Col>
          <br />
        </Col>
        <Col>
          <br />
        </Col>
      </Row>
      <br />
      <h4 className="font-link">
        {" "}
        Welcome {getusername(decrypted).toLowerCase()}{" "}
      </h4>
      <br />
      <br />
      <div
        id="r"
        style={{
          justifyContent: "center",
        }}
      >
        <Row>
          <Col>
            <br />
          </Col>
          <Col>
            <div className="display_center">
              <form>
                <div
                  className="p-3 rounded "
                  style={{
                    backgroundColor: "rgba(132, 140, 169, 0.5)",
                  }}
                >
                  <h3
                    className="m-3 d-flex justify-content-center"
                    style={{ color: "white" }}
                  >
                    Create Server
                  </h3>
                  <h5 className="m-3 d-flex" style={{ color: "white" }}>
                    Server's name
                  </h5>
                  <input
                    type="text"
                    className="form-control"
                    id="server"
                    value={Servername}
                    required
                    onChange={onChangeservername}
                  />
                  <br />
                  <button
                    type="button"
                    className="btn btn-primary "
                    onClick={() => postit()}
                  >
                    Create Server
                  </button>
                </div>
              </form>
            </div>
          </Col>
          <Col>
            <br />
          </Col>
          <Col>
            <div className="display_center">
              <form>
                <div
                  className="p-3 rounded "
                  style={{
                    backgroundColor: "rgba(132, 140, 169, 0.5)",
                  }}
                >
                  <h3
                    className="m-3 d-flex justify-content-center"
                    style={{ color: "white" }}
                  >
                    join Server
                  </h3>
                  <h5 className="m-3 d-flex" style={{ color: "white" }}>
                    Server's Invite key
                  </h5>
                  <input
                    type="text"
                    className="form-control"
                    id="server"
                    value={invite}
                    required
                    onChange={onChangeinvite}
                  />
                  <br />
                  <button
                    type="button"
                    className="btn btn-primary "
                    onClick={() => joinit()}
                  >
                    Join Server
                  </button>
                </div>
              </form>
            </div>
          </Col>
          <Col>
            <br />
          </Col>
        </Row>
      </div>
      <br />
      <br />
      <br />
      <Row>
        <Col>
          <br />
        </Col>
        <Col>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>
                  <h8 className="m-3 d-flex" style={{ color: "white" }}>
                    Server's name
                  </h8>
                </th>
                <th>
                  <h8 className="m-3 d-flex" style={{ color: "white" }}>
                    Owner
                  </h8>
                </th>
                <th>
                  <h8 className="m-3 d-flex" style={{ color: "white" }}>
                    Number of members
                  </h8>
                </th>
                <th>
                  <h8 className="m-3 d-flex" style={{ color: "white" }}>
                    Invite key
                  </h8>
                </th>
                <th>
                  <h8 className="m-3 d-flex" style={{ color: "white" }}>
                    Join
                  </h8>
                </th>
                <th>
                  <h8 className="m-3 d-flex" style={{ color: "white" }}>
                    Leave
                  </h8>
                </th>
              </tr>
            </thead>
            <tbody>
              {Servers.filter((server) =>
                is_in_server(server.List_of_Users)
              ).map((server) => (
                <tr key={server.Server_ID}>
                  <td>{server.Server_name}</td>
                  <td>{getusername(server.Admin).toLowerCase()}</td>
                  <td>{Object.keys(server.List_of_Users).length}</td>
                  <td>{server.List_of_Channels.key}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-primary "
                      onClick={() => Join(server.Server_ID)}
                    >
                      Join
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-primary "
                      onClick={() => Leave(server, decrypted)}
                    >
                      Leave
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
        <Col>
          <br />
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};
export default Dashboard;
