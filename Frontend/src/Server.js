import React, { useState, useEffect } from "react";
import "./App.css";
import { useLocation } from "react-router-dom";
import WP from "./images3.png";
import WP1 from "./download-removebg-preview.png";
import { Row, Col } from "react-bootstrap";
import "react-chat-elements/dist/main.css";
import { NavLink as Link } from "react-router-dom";
import { css } from "@emotion/css";
import ScrollToBottom from "react-scroll-to-bottom";
import axios from "axios";
const ROOT_CSS = css({
  height: 775,
  width: 1700,
});
async function get1(url) {
  let response = await fetch(url);
  let data = await response.json();
  return data;
}
async function addmessagetochannel(url, server, chan, msg) {
  var obj = server["List_of_Channels"];
  obj[chan] = obj[chan] + msg;
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      Server_ID: server["Server_ID"],
      Server_name: server["Server_name"],
      Admin: server["Admin"],
      List_of_Users: server["List_of_Users"],
      List_of_Channels: obj,
    }),
  };
  fetch(url, requestOptions);
}
async function addchanneltoserver(url, server, channame) {
  var obj = server["List_of_Channels"];
  obj[channame] = "";
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      Server_ID: server["Server_ID"],
      Server_name: server["Server_name"],
      Admin: server["Admin"],
      List_of_Users: server["List_of_Users"],
      List_of_Channels: obj,
    }),
  };
  fetch(url, requestOptions);
}
async function delserv(url) {
  axios.delete(url);
}
async function removechannelfromserver(url, server, channame) {
  var obj = server["List_of_Channels"];
  delete obj[channame];
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      Server_ID: server["Server_ID"],
      Server_name: server["Server_name"],
      Admin: server["Admin"],
      List_of_Users: server["List_of_Users"],
      List_of_Channels: obj,
    }),
  };
  fetch(url, requestOptions);
}
const Server = () => {
  const [Servers, setservers] = useState([]);
  const [User, setuser] = useState([]);
  const [state, setstate] = useState(true);
  const [loc, setloc] = useState(
    useLocation().pathname.replace("/Server/", "")
  );
  const [currentchannel, setchannel] = useState("");
  const [message, setmessage] = useState("");
  function onChangemessage(e) {
    setmessage(e.target.value);
  }
  var Sid = loc.split("-////-")[0];
  var uid = loc.split("-////-/")[1];
  const getserver = (id) => {
    const decrypt = (crypted, randi) =>
      JSON.parse(
        CryptoJS.AES.decrypt(crypted, randi).toString(CryptoJS.enc.Utf8)
      ).content;
    const rand = "randomizer";
    var dec = decrypt(id, rand);
    for (var i = 0; i < Servers.length; i++) {
      if (Servers[i]["Server_ID"] === dec) {
        return Servers[i];
      }
    }
    return "";
  };
  async function reload() {
    if (state) {
      let data = await get1("https://azertyha87.pythonanywhere.com/server");
      setservers(data);
      let data1 = await get1("https://azertyha87.pythonanywhere.com/user");
      setuser(data1);
      setstate(false);
      setchannel("Global");
    }
  }

  const rand = "randomizer";
  var CryptoJS = require("crypto-js");

  const getuser = (id) => {
    const decrypt = (crypted, randi) =>
      JSON.parse(
        CryptoJS.AES.decrypt(crypted, randi).toString(CryptoJS.enc.Utf8)
      ).content;
    const rand = "randomizer";
    var dec = decrypt(id, rand);
    for (var i = 0; i < User.length; i++) {
      if (User[i]["User_ID"] === dec) {
        return User[i]["Username"];
      }
    }
    return "";
  };
  const decrypt = (crypted, randi) =>
    JSON.parse(CryptoJS.AES.decrypt(crypted, randi).toString(CryptoJS.enc.Utf8))
      .content;
  const go_back = () => {
    const obj = loc.split("-////-")[1];
    window.location = "/Dashboard" + obj;
  };
  reload();
  var temp = {
    position: "right",
    type: "text",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
  };
  async function confirm_send(mess) {
    if (currentchannel !== "") {
      await addmessagetochannel(
        "https://azertyha87.pythonanywhere.com/server",
        getserver(Sid),
        currentchannel,
        mess
      );
    }
  }
  const sendit = () => {
    setstate(true);
    if (message !== "") {
      var obj = "/--/" + getuser(uid) + "::!::" + message;
      confirm_send(obj);
      setmessage("");
    }
  };
  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };
  const handleKeypress = (e) => {
    setstate(true);
    if (e.key === "Enter") {
      sendit();
    }
  };
  async function addchannel() {
    var serv = getserver(Sid);
    var tempstate = true;
    const newchannel = prompt("Please enter new channel name: ");
    for (const [key, value] of Object.entries(serv["List_of_Channels"])) {
      if (key === newchannel) {
        tempstate = false;
      }
    }
    if (tempstate) {
      await addchanneltoserver(
        "https://azertyha87.pythonanywhere.com/server",
        getserver(Sid),
        newchannel
      );
    } else {
      alert(
        "Invalid input, maybe there already exist a channel with this name"
      );
    }
  }
  async function removechannel() {
    var serv = getserver(Sid);
    var tempstate = "";
    const delchannel = prompt(
      "Please enter the name of the channel you want to delete :"
    );
    for (const [key, value] of Object.entries(serv["List_of_Channels"])) {
      if ((key === delchannel) & (key !== "Global") & (key != "key")) {
        tempstate = key;
      }
    }
    if (tempstate) {
      await removechannelfromserver(
        "https://azertyha87.pythonanywhere.com/server",
        getserver(Sid),
        delchannel
      );
    } else {
      if (delchannel !== null) {
        alert(
          "Invalid input, either there exist no channel with that name or you don't have the permission to delete it."
        );
      }
    }
  }
  async function deleteserver() {
    var serv = getserver(Sid);
    const servname = prompt(
      "Please enter the server's name to confirm the deletion: "
    );
    if (servname === serv.Server_name) {
      var obj =
        "https://azertyha87.pythonanywhere.com/server/" + serv.Server_ID;
      await delserv(obj);
      alert("deleted successfully");
      go_back();
    } else {
      if (servname !== null) {
        alert("Invalid input");
      }
    }
  }
  return (
    <div style={{ minWidth: 1920 }}>
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
        <Col>
          <h4 className="font-link" style={{ fontSize: 13.5 }}>
            Logged in as {getuser(uid)}
          </h4>
        </Col>
      </Row>
      <img
        style={{
          position: "absolute",
          left: `${20}px`,
          top: `${15}px`,
        }}
        height="65"
        src={WP}
        onClick={go_back}
      />

      <h4 className="font-link" style={{ fontSize: 77 }}>
        JConnect.
      </h4>
      <div
        id="r"
        style={{
          justifyContent: "center",
          textalign: "center",
        }}
      >
        <div class="sidebar-container">
          <div class="sidebar-logo">
            {decrypt(uid, rand) === getserver(Sid).Admin ? (
              <img
                style={{
                  position: "absolute",
                  left: `${180}px`,
                  top: `${10}px`,
                }}
                height="30"
                src={WP1}
                onClick={deleteserver}
              />
            ) : (
              <div />
            )}

            <div style={{ textAlign: "left" }}>
              {getserver(Sid).Server_name}
            </div>
          </div>
          <ul class="sidebar-navigation">
            <li class="header">Channels:</li>
            {getserver(Sid).List_of_Channels !== undefined ? (
              Object.keys(getserver(Sid).List_of_Channels)
                .filter((channel) => (channel !== "key") & (channel !== "null"))
                .map((channel) => (
                  <li onClick={() => setchannel(channel)}>
                    <a href="#">
                      <i aria-hidden="true">{channel}</i>
                    </a>
                  </li>
                ))
            ) : (
              <div />
            )}
            <li>
              <a style={{ cursor: "pointer" }} onClick={() => addchannel()}>
                {" "}
                Add channel
              </a>
            </li>
            {decrypt(uid, rand) === getserver(Sid).Admin ? (
              <li>
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => removechannel()}
                >
                  remove channel
                </a>
              </li>
            ) : (
              <div />
            )}
          </ul>
        </div>
        <div>
          <br />
          <br />
          <br />
          <br />
        </div>
        <br />
      </div>
      <div
        className="display_center"
        style={{ marginTop: -120, marginLeft: 200 }}
      >
        <form>
          <div
            className="p-5 rounded "
            style={{
              backgroundColor: "rgba(32, 41, 69, 0.4)",
            }}
          >
            <ScrollToBottom className={ROOT_CSS} mode={"bottom"}>
              {currentchannel !== "" ? (
                getserver(Sid)
                  ["List_of_Channels"][currentchannel].split("/--/")
                  .filter(
                    (message) =>
                      (message !== "") & (message !== ":") & (message !== " ")
                  )
                  .map((message) =>
                    getuser(uid) === message.split("::!::")[0] ? (
                      <div
                        id="r"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Row>
                          <Col>
                            <div className="msgs">
                              <div
                                className={`msg ${
                                  getuser(uid) === message.split("::!::")[0]
                                    ? "sent"
                                    : "received"
                                }`}
                              >
                                <p>
                                  <div style={{ fontWeight: "bold" }}>
                                    {message.split("::!::")[0]}:
                                  </div>
                                  {" " +
                                    message.replace(
                                      message.split("::!::")[0] + "::!::",
                                      ""
                                    )}
                                </p>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    ) : (
                      <div
                        id="r"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Row>
                          <Col>
                            <div className="msgs">
                              <div
                                className={`msg ${
                                  getuser(uid) === message.split("::!::")[0]
                                    ? "sent"
                                    : "received"
                                }`}
                              >
                                <p>
                                  <div style={{ fontWeight: "bold" }}>
                                    {message.split("::!::")[0]}:
                                  </div>
                                  {" " +
                                    message.replace(
                                      message.split("::!::")[0] + "::!::",
                                      ""
                                    )}
                                </p>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    )
                  )
              ) : (
                <div />
              )}
            </ScrollToBottom>
            <br />
            {currentchannel !== "" ? (
              <div>
                <Row>
                  <Col>
                    <div
                      style={{
                        width: "1550px",
                        height: "40px",
                        marginLeft: "50px",
                        marginRight: "0px",
                      }}
                    >
                      <input
                        type="text"
                        className="form-control"
                        value={message}
                        onChange={onChangemessage}
                        onKeyPress={handleKeypress}
                      />
                    </div>
                  </Col>
                  <Col>
                    <button
                      style={{
                        marginTop: "-3px",
                        width: "170px",
                        height: "43px",
                      }}
                      type="button"
                      className="btn btn-primary "
                      onClick={sendit}
                    >
                      Send
                    </button>
                  </Col>
                </Row>
              </div>
            ) : (
              <div>
                <br />
                <br />
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
export default Server;
