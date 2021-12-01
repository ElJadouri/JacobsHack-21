import React, { useState } from "react";
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
async function post1(url, username, email, password, major, room) {
  const json = JSON.stringify({
    Username: username,
    Email: email,
    Password: password,
    Is_online: false,
    List_of_friends: {},
    List_of_servers: {},
    Major: "major",
    Room: "room",
  });
  const res = await axios.post(url, json, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

const Register = () => {
  var emails = [
    {
      id: "6e057afb-c9d6-4c58-a00d-251ce5606616",
      userPrincipalName: "hmcdermott@jacobs-university.de",
    },
    {
      id: "7da2390a-888c-44cd-94ad-9eb9a1c84618",
      userPrincipalName: "seljadouri@jacobs-university.de",
    },
    {
      id: "b3002d42-82f7-43eb-aa13-24f27aaef5cd",
      userPrincipalName: "oshehi@jacobs-university.de",
    },
    {
      id: "718fcc1c-c017-419c-b69e-ae4c6d8f1a66",
      userPrincipalName: "amorchid@jacobs-university.de",
    },
    {
      id: "d913d1bc-6de3-46ea-a513-2d165215402c",
      userPrincipalName: "marsalane@jacobs-university.de",
    },
    {
      id: "87c214cc-b9e5-4a38-9859-1caae67b0a39",
      userPrincipalName: "hbouhelal@jacobs-university.de",
    },
    {
      id: "7b1c7e97-0b3c-4190-8111-a5720ed0c530",
      userPrincipalName: "mdhaque@jacobs-university.de",
    },
    {
      id: "9269fe46-2dee-4604-9b4f-5223209ea20e",
      userPrincipalName: "mabdenouri@jacobs-university.de",
    },
    {
      id: "ef4c3e0f-d5ee-4805-9426-bd5a30b1211d",
      userPrincipalName: "agregoire@jacobs-university.de",
    },
    {
      id: "405c67c2-5be2-425b-9bc2-2b32071433e6",
      userPrincipalName: "emerkaj@jacobs-university.de",
    },
    {
      id: "6210dd10-1b41-4c7c-aca7-8910d510fe73",
      userPrincipalName: "aaydin@jacobs-university.de",
    },
    {
      id: "ef8dfe7d-6d54-4fdf-926b-6a374eb3e649",
      userPrincipalName: "arsingh@jacobs-university.de",
    },
    {
      id: "13b1354d-ef8b-42ef-ab50-70264bfdf6fc",
      userPrincipalName: "dchaudhary@jacobs-university.de",
    },
    {
      id: "c7d6849e-6a5a-4777-b0ae-ef6c6fb53c72",
      userPrincipalName: "ibenhmidan@jacobs-university.de",
    },
    {
      id: "ae8475a5-831a-46b0-abb7-01e5a7d8e9cb",
      userPrincipalName: "mouchrahou@jacobs-university.de",
    },
    {
      id: "a2c4f311-feb0-4d73-8ea1-1d5f111d197a",
      userPrincipalName: "kcollett@jacobs-university.de",
    },
    {
      id: "ee0525e6-422f-4390-84a0-8b1cb5a48b18",
      userPrincipalName: "mismaili@jacobs-university.de",
    },
    {
      id: "7b90f1da-9d40-4fae-b0a0-d13e103f0240",
      userPrincipalName: "pchowdhury@jacobs-university.de",
    },
    {
      id: "f6cb4abb-17a3-4207-9a92-417839865b55",
      userPrincipalName: "pgjoni@jacobs-university.de",
    },
    {
      id: "5b23f6f0-0777-4dab-9c8b-bc7a2f87f233",
      userPrincipalName: "lonica@jacobs-university.de",
    },
    {
      id: "485d7485-4206-4e7b-99f7-9941665d6f77",
      userPrincipalName: "tbutt@jacobs-university.de",
    },
    {
      id: "d7f415d6-3dad-4fec-9a47-017b5f3a2889",
      userPrincipalName: "mghandour@jacobs-university.de",
    },
    {
      id: "efa9e959-259b-47cc-9153-eb8b6c345163",
      userPrincipalName: "wbougida@jacobs-university.de",
    },
    {
      id: "4892b78a-a583-47fb-9d38-e5442c2bb4b2",
      userPrincipalName: "npuja@jacobs-university.de",
    },
    {
      id: "ae23c1bd-8c55-4f0f-abee-0d73fc75d845",
      userPrincipalName: "akaleci@jacobs-university.de",
    },
    {
      id: "32453988-0eb3-4789-8d61-638843100789",
      userPrincipalName: "stirmazi@jacobs-university.de",
    },
    {
      id: "19c17bb7-1156-4a6e-8f84-4f9a3f40c4ae",
      userPrincipalName: "mhryhoriev@jacobs-university.de",
    },
    {
      id: "f6732ded-d932-4627-b933-a809661fe0ae",
      userPrincipalName: "ualvani@jacobs-university.de",
    },
    {
      id: "6aee9a86-4742-435e-acb0-cb9bb4689423",
      userPrincipalName: "snaouassih@jacobs-university.de",
    },
    {
      id: "51ee2141-8646-4ab7-b8c1-e3c0d5fe11e0",
      userPrincipalName: "bdosieva@jacobs-university.de",
    },
    {
      id: "f61b17bf-d5fe-4b63-a785-c4275f8a1c2b",
      userPrincipalName: "jzaliaduon@jacobs-university.de",
    },
    {
      id: "e9c072c9-0db6-46f1-82e4-ff10b7fc7893",
      userPrincipalName: "ssalman@jacobs-university.de",
    },
    {
      id: "c885d6b5-f878-4a0a-9438-519b7cbeef65",
      userPrincipalName: "karzumanya@jacobs-university.de",
    },
    {
      id: "67c877e0-5bfa-4b39-8230-68aa3c6270e8",
      userPrincipalName: "bmbogho@jacobs-university.de",
    },
    {
      id: "b3bd31e0-46ce-4bfb-89b0-a0a6218facbb",
      userPrincipalName: "jrauniyar@jacobs-university.de",
    },
    {
      id: "33881ebd-d723-4544-8558-31bd7fe34b96",
      userPrincipalName: "sgiri@jacobs-university.de",
    },
    {
      id: "190bc370-8359-43be-82a5-0d8d78ce2e0f",
      userPrincipalName: "tsherpa@jacobs-university.de",
    },
    {
      id: "50801f7f-c351-4a8b-94a3-e7a4ed6165a9",
      userPrincipalName: "aardabek@jacobs-university.de",
    },
    {
      id: "d6aedd28-41ca-4a13-9467-3c443d5e8e7a",
      userPrincipalName: "iguner@jacobs-university.de",
    },
    {
      id: "8b253aad-6c68-4801-b185-c79689160b78",
      userPrincipalName: "michoi@jacobs-university.de",
    },
    {
      id: "399fd8b5-a2d4-4305-9940-7ead06323596",
      userPrincipalName: "mkadiameen@jacobs-university.de",
    },
    {
      id: "64868888-f659-4177-8c33-03164186eba2",
      userPrincipalName: "hsingh@jacobs-university.de",
    },
    {
      id: "054508fe-5d98-46a4-bd5a-e250314b430b",
      userPrincipalName: "gabhattara@jacobs-university.de",
    },
    {
      id: "f627c859-60f7-4d5d-82fb-ac128cfa8558",
      userPrincipalName: "ccheng@jacobs-university.de",
    },
    {
      id: "8200704d-3697-4db7-85f3-fea466db7ab5",
      userPrincipalName: "jstreete@jacobs-university.de",
    },
    {
      id: "b6b02418-a272-4b15-b959-79d567e931a0",
      userPrincipalName: "sdaaboul@jacobs-university.de",
    },
    {
      id: "31f6924c-bee3-4068-bfc3-13cf86a76999",
      userPrincipalName: "jrezvani@jacobs-university.de",
    },
    {
      id: "94d6f96b-e06f-460b-adc7-0818cbada921",
      userPrincipalName: "dkolisnyk@jacobs-university.de",
    },
    {
      id: "20b01d99-e165-4746-a8b9-a5a76f205b61",
      userPrincipalName: "tadane@jacobs-university.de",
    },
    {
      id: "401a57e5-5e5f-4d3a-b446-a9e8f85677c4",
      userPrincipalName: "nacharya@jacobs-university.de",
    },
    {
      id: "08c36baa-a7fd-4144-8e21-6438b17fda67",
      userPrincipalName: "carukwe@jacobs-university.de",
    },
    {
      id: "70db0672-61f2-49d4-b3f6-ee896137bcf2",
      userPrincipalName: "azafar@jacobs-university.de",
    },
    {
      id: "ed734f27-2c2b-414d-9fc1-1453a691ca9f",
      userPrincipalName: "jramosalve@jacobs-university.de",
    },
    {
      id: "f7e719cc-d705-478b-847e-b3db93508fa1",
      userPrincipalName: "bassefa@jacobs-university.de",
    },
    {
      id: "2ac7a9cd-4878-4cd1-81f2-8669c844ba4b",
      userPrincipalName: "vnesro@jacobs-university.de",
    },
    {
      id: "8e2dd16a-f971-4f2b-b42d-276c4767a012",
      userPrincipalName: "ssah@jacobs-university.de",
    },
    {
      id: "fe44885d-5038-48eb-8507-ad13a1fdc3fd",
      userPrincipalName: "nbodaveli@jacobs-university.de",
    },
    {
      id: "5b0eb3e1-4ac2-46f8-8ae9-dbd74c6eb312",
      userPrincipalName: "sabdullah@jacobs-university.de",
    },
    {
      id: "073c18c3-44d7-4021-beb4-38df22659e57",
      userPrincipalName: "asubedi@jacobs-university.de",
    },
    {
      id: "e2055760-d2cb-488c-99d4-4b2a1919ec54",
      userPrincipalName: "daschmidt@jacobs-university.de",
    },
    {
      id: "4f936d1c-a962-4d4c-9bbd-a29cd72129af",
      userPrincipalName: "abojha@jacobs-university.de",
    },
    {
      id: "d3ea7711-8a95-4dda-8731-02d2866ff2d2",
      userPrincipalName: "okirkwood@jacobs-university.de",
    },
    {
      id: "df9fe59d-62d9-4c7d-af40-736e0400cc5c",
      userPrincipalName: "melbergui@jacobs-university.de",
    },
    {
      id: "f157c2cd-381e-4a69-884c-552fc7364aba",
      userPrincipalName: "vmansilla@jacobs-university.de",
    },
    {
      id: "c543f803-94ad-45dc-88f6-923ca63b9e1d",
      userPrincipalName: "jbiehl@jacobs-university.de",
    },
    {
      id: "8acfb3e7-65cf-4937-b191-72403e84d7ee",
      userPrincipalName: "ssunar@jacobs-university.de",
    },
    {
      id: "2ab787ef-b94b-4123-a5b8-db127a3e5832",
      userPrincipalName: "pmishra@jacobs-university.de",
    },
    {
      id: "28f7e221-0bff-477c-b24e-74cc4b911f62",
      userPrincipalName: "nabdurasul@jacobs-university.de",
    },
    {
      id: "2a496f9d-8f88-496d-82aa-23b5c5248553",
      userPrincipalName: "ashrivasta@jacobs-university.de",
    },
    {
      id: "09064aec-87be-47bf-aa33-3665e3829780",
      userPrincipalName: "jpazymino@jacobs-university.de",
    },
    {
      id: "48abc7dc-ca0d-4eb3-a2f4-64403f7b34cb",
      userPrincipalName: "nfuehrling@jacobs-university.de",
    },
    {
      id: "1d4a8610-cce1-49de-be11-df11953b9c66",
      userPrincipalName: "etergip@jacobs-university.de",
    },
    {
      id: "4765a0c7-dd82-41fa-9492-4d4b85a470f6",
      userPrincipalName: "qqamhia@jacobs-university.de",
    },
    {
      id: "33762324-0208-4d02-a20f-e745204266bf",
      userPrincipalName: "hhussain@jacobs-university.de",
    },
    {
      id: "d36ca04d-8c04-4c90-9046-0537af259408",
      userPrincipalName: "rkapoor@jacobs-university.de",
    },
    {
      id: "4cbb860d-34d4-495c-82d4-ee1f96059d92",
      userPrincipalName: "musshah@jacobs-university.de",
    },
    {
      id: "60cb40b7-43f9-433c-abbe-c963e6fea4f0",
      userPrincipalName: "bgebremich@jacobs-university.de",
    },
    {
      id: "e8df7301-2dd4-467f-a11a-a2c856b8387e",
      userPrincipalName: "vsanchez@jacobs-university.de",
    },
    {
      id: "1020e1e2-0ee8-4eb6-b654-b4ca37db671f",
      userPrincipalName: "babunima@jacobs-university.de",
    },
    {
      id: "f16605f3-52eb-4bb4-bd38-b8757cf8da16",
      userPrincipalName: "jgonzalezh@jacobs-university.de",
    },
    {
      id: "024e1103-7450-43e5-b510-426fecff67e4",
      userPrincipalName: "iobidjonov@jacobs-university.de",
    },
    {
      id: "c36de878-bf5c-4622-b520-94f795a19118",
      userPrincipalName: "nkorn@jacobs-university.de",
    },
    {
      id: "9454da84-57f9-43d8-ac33-7ccfb844b83f",
      userPrincipalName: "nstege@jacobs-university.de",
    },
    {
      id: "bc12bdf1-b64d-48b1-bcd9-74006ebd6252",
      userPrincipalName: "ahasanaj@jacobs-university.de",
    },
    {
      id: "0ef05ed5-14a0-4d96-bfa2-f4d50b36fe00",
      userPrincipalName: "rstalker@jacobs-university.de",
    },
    {
      id: "9a7c3b04-fbff-442b-9055-e18f355bfbea",
      userPrincipalName: "jmorris@jacobs-university.de",
    },
    {
      id: "ace141f3-2d42-4069-96ec-9ec84e3cf8c6",
      userPrincipalName: "jesche@jacobs-university.de",
    },
    {
      id: "d12a8505-bff8-4335-a119-ffdbd1fdbaa8",
      userPrincipalName: "stiwari@jacobs-university.de",
    },
    {
      id: "f6104365-a644-4335-b9cb-9694123910f2",
      userPrincipalName: "cbuller@jacobs-university.de",
    },
    {
      id: "ff3c8513-5377-4ae8-b5ec-0832ec2f5c23",
      userPrincipalName: "nkhatiwada@jacobs-university.de",
    },
    {
      id: "af79239d-85e5-4d99-ab9a-5adcb77cc7de",
      userPrincipalName: "sukc@jacobs-university.de",
    },
    {
      id: "e502bb0a-57b5-4be6-bac0-0cf1af685866",
      userPrincipalName: "aganbaatar@jacobs-university.de",
    },
    {
      id: "c8daf09d-9612-4cc1-90e0-4c929154394a",
      userPrincipalName: "mmunkherde@jacobs-university.de",
    },
    {
      id: "65742819-590f-4b53-aca7-6333e5dbd091",
      userPrincipalName: "abasheer@jacobs-university.de",
    },
    {
      id: "92a28e6a-7de4-4158-aa46-0c0c2b714350",
      userPrincipalName: "bpanthi@jacobs-university.de",
    },
    {
      id: "949103f6-eef2-4796-85da-68fb261f68c3",
      userPrincipalName: "mquiyyas@jacobs-university.de",
    },
    {
      id: "f3af97f3-501c-4569-8004-7ef9fe6cec74",
      userPrincipalName: "phkouam@jacobs-university.de",
    },
    {
      id: "b17f8cb1-614d-43c2-9043-fec1f53b8660",
      userPrincipalName: "gwire@jacobs-university.de",
    },
    {
      id: "05fd7e35-6e8e-479e-a9c0-8c88f3849a79",
      userPrincipalName: "ecireli@jacobs-university.de",
    },
    {
      id: "e5782de6-4254-4f7b-a627-a4ef5ca48c2f",
      userPrincipalName: "murashid@jacobs-university.de",
    },
    {
      id: "3384d13d-67cc-48f6-b74d-f9e56f540cc3",
      userPrincipalName: "bbelenis@jacobs-university.de",
    },
    {
      id: "61051f4c-37d1-4c45-a7d6-cc3be7931976",
      userPrincipalName: "gtache@jacobs-university.de",
    },
    {
      id: "0fdd0506-9afe-4553-b9a0-c4275f8e9954",
      userPrincipalName: "agillani@jacobs-university.de",
    },
    {
      id: "697493fa-f6ab-4b06-b5fa-fda6f3b31399",
      userPrincipalName: "jweske@jacobs-university.de",
    },
    {
      id: "461b8d87-135c-4d44-aa37-1dfa2dcdc104",
      userPrincipalName: "syhassan@jacobs-university.de",
    },
    {
      id: "3da89dfb-39ec-4ddb-8a29-47574cf3dbc1",
      userPrincipalName: "cortiz@jacobs-university.de",
    },
    {
      id: "f0bc55d3-5ab9-4811-838e-b2cfe2d74a22",
      userPrincipalName: "lmiskevich@jacobs-university.de",
    },
    {
      id: "c8333fdd-e41d-4d84-9161-05768030b23e",
      userPrincipalName: "mshalari@jacobs-university.de",
    },
    {
      id: "027b33b0-252c-47f5-82c7-f5f890c8d063",
      userPrincipalName: "jbaumgarte@jacobs-university.de",
    },
    {
      id: "2de22a7f-2225-44b0-87a1-727f1e07036f",
      userPrincipalName: "anjoshi@jacobs-university.de",
    },
    {
      id: "720acf2d-29db-4144-b484-33e3942dbfc3",
      userPrincipalName: "abocari@jacobs-university.de",
    },
    {
      id: "25ff19ef-0073-40f8-8736-8c5b1f5fa5a0",
      userPrincipalName: "kmetalla@jacobs-university.de",
    },
    {
      id: "93cb4b79-8d33-4391-9fbf-52b165f53a2d",
      userPrincipalName: "mrana@jacobs-university.de",
    },
    {
      id: "c6102e27-9029-4cf2-83e4-7368804d5885",
      userPrincipalName: "aasingh@jacobs-university.de",
    },
    {
      id: "67d42662-10b7-4bd1-b911-c4eaf09a91a9",
      userPrincipalName: "rmutambara@jacobs-university.de",
    },
    {
      id: "30361e51-6425-4dc7-8102-28f0c59d8948",
      userPrincipalName: "ndelessa@jacobs-university.de",
    },
    {
      id: "ec05e788-251d-4f9d-907b-ae37a58a0e51",
      userPrincipalName: "kshagazato@jacobs-university.de",
    },
    {
      id: "3bcdf694-559b-4137-823e-f78e88f5f57d",
      userPrincipalName: "rmtenga@jacobs-university.de",
    },
    {
      id: "52337d2b-6cd2-4756-b630-91ee69ea1ac2",
      userPrincipalName: "btafa@jacobs-university.de",
    },
    {
      id: "f9f89b90-dc1b-4cb0-851f-4eadb621b13d",
      userPrincipalName: "ahardeman@jacobs-university.de",
    },
    {
      id: "abf4c70f-486c-4ae0-a6f1-464cbc2aa3ce",
      userPrincipalName: "pupadhayay@jacobs-university.de",
    },
    {
      id: "39363c0d-0d13-47d7-a658-cfb04bd1112d",
      userPrincipalName: "ilangen@jacobs-university.de",
    },
    {
      id: "34a1eaa8-487b-47d8-9e81-2d0e32934956",
      userPrincipalName: "dlera@jacobs-university.de",
    },
    {
      id: "d3a06674-d776-419a-b1c4-8c0937a9ccc7",
      userPrincipalName: "nthapa@jacobs-university.de",
    },
    {
      id: "e149b836-02d3-43d4-bb04-49668eff4c49",
      userPrincipalName: "nkassa@jacobs-university.de",
    },
    {
      id: "f90eb280-49b8-4ceb-8d3b-156385bcc61a",
      userPrincipalName: "srabata@jacobs-university.de",
    },
    {
      id: "678845d0-6386-494d-9265-728f97c354c9",
      userPrincipalName: "dbudha@jacobs-university.de",
    },
    {
      id: "1ee174f8-0fa4-4acc-b854-40c9bbf2b4e4",
      userPrincipalName: "aplatow@jacobs-university.de",
    },
    {
      id: "bdcc9498-552e-4d4c-a3cb-a92c9bb0fadb",
      userPrincipalName: "msuelzle@jacobs-university.de",
    },
    {
      id: "047055cf-d177-4eaf-a8dd-d115a1b5da49",
      userPrincipalName: "aalikbayev@jacobs-university.de",
    },
    {
      id: "5ec1e76f-95bb-4dca-83df-655ff676b048",
      userPrincipalName: "grizanaj@jacobs-university.de",
    },
    {
      id: "7fc2061e-1742-4429-bcc2-dabb908e5778",
      userPrincipalName: "creiterbre@jacobs-university.de",
    },
    {
      id: "1dd26e18-ebf3-40b0-ae53-f20b2d8c8bb1",
      userPrincipalName: "emustafaj@jacobs-university.de",
    },
    {
      id: "35cdb4d6-20c4-4499-bac7-42fd3f69ebed",
      userPrincipalName: "ukhadka@jacobs-university.de",
    },
    {
      id: "21d8cc64-749c-4ea7-8c21-55a888e2d7c1",
      userPrincipalName: "bniroula@jacobs-university.de",
    },
    {
      id: "e214e760-59e5-44c2-b952-8f476be45e45",
      userPrincipalName: "kabualrish@jacobs-university.de",
    },
    {
      id: "7f86561b-cba9-4049-998a-ae80a611a2fc",
      userPrincipalName: "mubinamer@jacobs-university.de",
    },
    {
      id: "12bfa0d6-fff4-45c7-9af4-f6fba3cc1175",
      userPrincipalName: "esupatashv@jacobs-university.de",
    },
    {
      id: "58f47289-e68c-4e99-a8eb-a6f02c5c112e",
      userPrincipalName: "mniazi@jacobs-university.de",
    },
    {
      id: "aa31a769-35a3-479d-a423-bb79028e3584",
      userPrincipalName: "anoyanashr@jacobs-university.de",
    },
    {
      id: "7a56f693-34c7-4d00-9401-f7565bc37525",
      userPrincipalName: "mtrujillo@jacobs-university.de",
    },
    {
      id: "69fb7d69-b9b8-4ae2-8773-facd644b8fb9",
      userPrincipalName: "mkhawar@jacobs-university.de",
    },
    {
      id: "9e538e87-0ad2-495c-b856-c47c2583589d",
      userPrincipalName: "ribrahimov@jacobs-university.de",
    },
    {
      id: "faa74b32-10c7-4bc2-8d3c-bdac0e5656ad",
      userPrincipalName: "nweigelt@jacobs-university.de",
    },
    {
      id: "51ef0c91-7943-4bfe-bccf-3297249e57e5",
      userPrincipalName: "selatassi@jacobs-university.de",
    },
    {
      id: "b6bef6ee-14b8-4706-906d-2571b89c1dd3",
      userPrincipalName: "gdanchevsk@jacobs-university.de",
    },
    {
      id: "9cd22afb-4c99-49c9-bd53-3ea7922d8c4a",
      userPrincipalName: "jsteinmuel@jacobs-university.de",
    },
    {
      id: "eda4a965-5153-435c-8363-45a87e76ea57",
      userPrincipalName: "zabadi@jacobs-university.de",
    },
    {
      id: "11162b42-5b7f-4bda-9b76-724bd42a1a6d",
      userPrincipalName: "npradhan@jacobs-university.de",
    },
    {
      id: "2e3f3fef-68ae-47f5-899d-783c48d2ce9c",
      userPrincipalName: "joliva@jacobs-university.de",
    },
    {
      id: "e3a5783a-28d9-4c22-ac39-8e3f09cd115e",
      userPrincipalName: "scoku@jacobs-university.de",
    },
    {
      id: "3310184f-4501-490b-bcb1-2f045eabb6b9",
      userPrincipalName: "aelmai@jacobs-university.de",
    },
    {
      id: "4145d013-7207-416c-867d-668b82b42def",
      userPrincipalName: "syadav@jacobs-university.de",
    },
    {
      id: "354e26e4-85ce-4d96-9aac-6c91451f541f",
      userPrincipalName: "smalebo@jacobs-university.de",
    },
    {
      id: "e23df321-ad43-489d-b184-6a2d13e0c498",
      userPrincipalName: "satarama@jacobs-university.de",
    },
    {
      id: "457ad09e-77fd-45da-8292-5770e9cb2709",
      userPrincipalName: "lschmidt@jacobs-university.de",
    },
    {
      id: "6ba6d838-5781-4f07-b3b1-d16b338ac9c1",
      userPrincipalName: "jbyun@jacobs-university.de",
    },
    {
      id: "db7d9c76-6677-48ae-8a1d-5d4b9d70ddb1",
      userPrincipalName: "fmamo@jacobs-university.de",
    },
    {
      id: "bb3901a8-c49d-49d1-ba21-82af8829c584",
      userPrincipalName: "asebti@jacobs-university.de",
    },
    {
      id: "52ca9215-d234-4c12-9263-4a7b93eff3e9",
      userPrincipalName: "jbako@jacobs-university.de",
    },
    {
      id: "1777213b-cc06-405e-b8e9-df6b675ba018",
      userPrincipalName: "rgupta@jacobs-university.de",
    },
    {
      id: "207a6b7e-1a34-4dc9-aed1-4468716ef6e3",
      userPrincipalName: "ywong@jacobs-university.de",
    },
    {
      id: "e42f44a0-9b78-4718-bcba-9e64e127f932",
      userPrincipalName: "muhalam@jacobs-university.de",
    },
    {
      id: "4454cc80-ece1-4699-bfee-4d28fe19211d",
      userPrincipalName: "ekuka@jacobs-university.de",
    },
    {
      id: "9797cc5a-c6e2-4405-9fe9-a72a5ec348e0",
      userPrincipalName: "fthakur@jacobs-university.de",
    },
    {
      id: "29a6c260-7787-44c2-baf4-073d6cad774e",
      userPrincipalName: "hmutha@jacobs-university.de",
    },
    {
      id: "e29f6e28-711c-4e4c-9b51-22b28851ea64",
      userPrincipalName: "sbhattarai@jacobs-university.de",
    },
    {
      id: "7580b8fb-30aa-40bd-b03f-757bf1876393",
      userPrincipalName: "dradu@jacobs-university.de",
    },
    {
      id: "5f1f347a-0bab-4d6c-83e5-a39b48c0a452",
      userPrincipalName: "nmdivani@jacobs-university.de",
    },
    {
      id: "5b41366f-9392-41ea-ac3f-e1cc406ad80d",
      userPrincipalName: "mtopbas@jacobs-university.de",
    },
    {
      id: "f703c6f7-50cf-4f4f-806b-d3373b62dffb",
      userPrincipalName: "abarnwal@jacobs-university.de",
    },
    {
      id: "d7041991-1eac-45ca-b991-15b393bf2370",
      userPrincipalName: "vlim@jacobs-university.de",
    },
    {
      id: "26e47e23-ff11-416a-b8f0-59709ee1a70e",
      userPrincipalName: "ibelguenan@jacobs-university.de",
    },
    {
      id: "d5b0bc71-ae18-47b7-a6dc-795d15e32725",
      userPrincipalName: "mouazghire@jacobs-university.de",
    },
    {
      id: "791017a4-00c1-4654-a7e5-d163883f19c3",
      userPrincipalName: "mmelnik@jacobs-university.de",
    },
    {
      id: "0c09912f-c77f-4685-8f30-39ef36672c5f",
      userPrincipalName: "jlin@jacobs-university.de",
    },
    {
      id: "b91e8fe2-fd74-487c-b051-fbd5ea13ed4e",
      userPrincipalName: "yhissi@jacobs-university.de",
    },
    {
      id: "8de82aed-4a15-43a2-9ae3-b8690c37a7d7",
      userPrincipalName: "gkamar@jacobs-university.de",
    },
    {
      id: "dfd378fe-1a7c-4a5e-b327-a3f24b32a63a",
      userPrincipalName: "mboudi@jacobs-university.de",
    },
    {
      id: "1eae3f9b-d852-4d53-98ff-b77913ab4a30",
      userPrincipalName: "ilaarif@jacobs-university.de",
    },
    {
      id: "a4056625-229f-49bd-a622-f6ea5c7b8b5c",
      userPrincipalName: "sgueler@jacobs-university.de",
    },
    {
      id: "a0d29b0a-f70b-4fbf-9b96-c2b4b2197bcb",
      userPrincipalName: "tugus@jacobs-university.de",
    },
    {
      id: "6dbeb1a0-f9e8-4b98-aa88-6213d9968fcb",
      userPrincipalName: "akelemet@jacobs-university.de",
    },
    {
      id: "cb2191ce-f050-44d6-b308-6553790bde64",
      userPrincipalName: "tsibon@jacobs-university.de",
    },
    {
      id: "2a3cde90-2360-480a-8efc-0148e0767c45",
      userPrincipalName: "sthapa@jacobs-university.de",
    },
    {
      id: "c85ebec4-dee5-4b8d-aedb-c49d8d139178",
      userPrincipalName: "ealiiarbek@jacobs-university.de",
    },
    {
      id: "204684cb-16f0-4c69-8c50-0ebe73b939d3",
      userPrincipalName: "jsnyder@jacobs-university.de",
    },
    {
      id: "5d028036-6ad2-4d0f-b1be-f384e5274587",
      userPrincipalName: "tvallejoza@jacobs-university.de",
    },
    {
      id: "20630605-e771-4d83-976e-b301b8cd7d79",
      userPrincipalName: "lponelies@jacobs-university.de",
    },
    {
      id: "0b6dbd13-b1b8-4508-9ba7-c8044ccfdcc1",
      userPrincipalName: "curbinasin@jacobs-university.de",
    },
    {
      id: "4295add3-db58-4ecb-a1c4-c3224036c4e4",
      userPrincipalName: "dcheciu@jacobs-university.de",
    },
    {
      id: "1a91e121-daf7-4038-9d23-b62c35357be3",
      userPrincipalName: "uuprety@jacobs-university.de",
    },
    {
      id: "95bcdd31-91f6-42e7-a5bf-d84304c2f45b",
      userPrincipalName: "ebosch@jacobs-university.de",
    },
    {
      id: "ff3374cd-ae29-40a4-8848-60ef86070778",
      userPrincipalName: "lderveni@jacobs-university.de",
    },
    {
      id: "ec0332f3-7691-4c6f-aaf3-66d5a4830c6f",
      userPrincipalName: "ataubayeva@jacobs-university.de",
    },
    {
      id: "515d895a-9796-484b-92af-0f79eeae4411",
      userPrincipalName: "susman@jacobs-university.de",
    },
    {
      id: "5453f75c-50e6-4162-b4be-444e7871a38c",
      userPrincipalName: "aaahmed@jacobs-university.de",
    },
    {
      id: "ee80dadf-9d17-46b0-af4d-ad4200a09bcd",
      userPrincipalName: "jgjorgjesk@jacobs-university.de",
    },
    {
      id: "a8bf9b6b-79a9-4834-9a67-282bb22726ae",
      userPrincipalName: "fmccloy@jacobs-university.de",
    },
    {
      id: "743b626b-776c-4218-91ed-c2cce19c4052",
      userPrincipalName: "jhofmann@jacobs-university.de",
    },
    {
      id: "ef8f5e2a-5251-43f3-a083-a1976720c598",
      userPrincipalName: "vlopez@jacobs-university.de",
    },
    {
      id: "deb38a75-32c9-48dc-a859-2aee438028ac",
      userPrincipalName: "dmanzano@jacobs-university.de",
    },
    {
      id: "e4d9dbc7-caca-41f6-8386-49e5a6a93204",
      userPrincipalName: "anedumpall@jacobs-university.de",
    },
    {
      id: "154d0197-61e9-4a7c-8595-dbfecfa88bd0",
      userPrincipalName: "kloladze@jacobs-university.de",
    },
    {
      id: "f0d92018-7483-4bc7-b106-99634099279f",
      userPrincipalName: "saboujid@jacobs-university.de",
    },
    {
      id: "d9b5b92c-d5de-4288-b820-d86c863ec97f",
      userPrincipalName: "nmukuhi@jacobs-university.de",
    },
    {
      id: "f36c8b12-612c-4324-ad82-1354f2f3b735",
      userPrincipalName: "pyadav@jacobs-university.de",
    },
    {
      id: "50bca7f6-f0f7-4830-9d96-31d9711c349d",
      userPrincipalName: "stimilsena@jacobs-university.de",
    },
    {
      id: "b31f1522-deb6-43a7-a6ba-5aae3ed4734f",
      userPrincipalName: "ndarkhan@jacobs-university.de",
    },
    {
      id: "08dd66f4-c1c5-4eec-a7c1-f087817c8a96",
      userPrincipalName: "othapa@jacobs-university.de",
    },
    {
      id: "1ee30369-bc5d-4bba-ba16-54913e7a5cf0",
      userPrincipalName: "nndao@jacobs-university.de",
    },
    {
      id: "55d125be-8f2a-4523-b4f1-8b8eb119b59e",
      userPrincipalName: "mwondwosse@jacobs-university.de",
    },
    {
      id: "98aed962-96e0-44a2-9fca-bdfc412cf5ae",
      userPrincipalName: "fwitt@jacobs-university.de",
    },
    {
      id: "6044f62a-5b99-407e-9cf4-6c0306dda28c",
      userPrincipalName: "bfatima@jacobs-university.de",
    },
    {
      id: "b541ecf8-8475-4328-8a0b-9961e9f935be",
      userPrincipalName: "svastardis@jacobs-university.de",
    },
    {
      id: "50286e8f-6383-45fd-a2ae-fc35903879f3",
      userPrincipalName: "mmandaza@jacobs-university.de",
    },
    {
      id: "cb693e9b-7672-4a47-a990-7337bd3c40b8",
      userPrincipalName: "relghouate@jacobs-university.de",
    },
    {
      id: "4ce54517-1930-47e4-9483-024e86e4cee9",
      userPrincipalName: "kkhalili@jacobs-university.de",
    },
    {
      id: "fd7ed523-ea63-4435-bfcd-336685829865",
      userPrincipalName: "gsalinasma@jacobs-university.de",
    },
    {
      id: "62e12b39-ad6f-413a-a85a-2dcab59058b7",
      userPrincipalName: "arai@jacobs-university.de",
    },
    {
      id: "b93726f3-b138-4a5f-88ba-f9359279abbf",
      userPrincipalName: "dpecini@jacobs-university.de",
    },
    {
      id: "fbf9ebf9-eaa7-4b77-aeb3-a281b7d6ff95",
      userPrincipalName: "gadeh@jacobs-university.de",
    },
    {
      id: "2499cbce-4d93-4a30-bb97-6eabf3e6fedc",
      userPrincipalName: "nochabashv@jacobs-university.de",
    },
    {
      id: "60be663d-78f9-4da5-88c9-173c2086553b",
      userPrincipalName: "abatkhuyag@jacobs-university.de",
    },
    {
      id: "7c74b6fb-2eb7-4d2b-bfd4-6d8f78402bb9",
      userPrincipalName: "mmostafa@jacobs-university.de",
    },
    {
      id: "a0e37d57-cd3d-4c46-8d6a-8971c996e8be",
      userPrincipalName: "aniyazov@jacobs-university.de",
    },
    {
      id: "586fb1bd-c1f8-4805-87ad-19eb644cca01",
      userPrincipalName: "ssulehri@jacobs-university.de",
    },
    {
      id: "7220ad94-a354-45f4-9fca-86370c1843d2",
      userPrincipalName: "gthway@jacobs-university.de",
    },
    {
      id: "1ce373b8-f82a-4d20-ac96-440023dff3c3",
      userPrincipalName: "yzhang02@jacobs-university.de",
    },
    {
      id: "1ebf28f9-82ea-4c7e-857b-afd4cd986356",
      userPrincipalName: "mchacon@jacobs-university.de",
    },
    {
      id: "975ed2e2-b7f1-4d53-a92b-e140bfbcede7",
      userPrincipalName: "gjanjghava@jacobs-university.de",
    },
    {
      id: "6cf9088c-ea74-4894-882e-41429ccbbe50",
      userPrincipalName: "upalmos@jacobs-university.de",
    },
    {
      id: "53845ecb-63c6-4e70-8695-ac4eb87238d9",
      userPrincipalName: "smansour@jacobs-university.de",
    },
    {
      id: "7702c6c2-f0af-4997-8a33-ce2a56a32c69",
      userPrincipalName: "gmaisashvi@jacobs-university.de",
    },
    {
      id: "7ec68675-6387-4b03-b9cc-69ce7c064a54",
      userPrincipalName: "nweers@jacobs-university.de",
    },
    {
      id: "bd44d02d-a815-4b95-b5ae-e6a8ed30f79a",
      userPrincipalName: "kalemayehu@jacobs-university.de",
    },
    {
      id: "9e61998a-07a2-4c6d-a7d7-018333a6e738",
      userPrincipalName: "emarghidan@jacobs-university.de",
    },
    {
      id: "0f7053a3-5228-45bc-89b5-c527d6198352",
      userPrincipalName: "nsahshanka@jacobs-university.de",
    },
    {
      id: "7063fb60-c92d-4165-a615-fd3936ab9871",
      userPrincipalName: "nibragimov@jacobs-university.de",
    },
    {
      id: "870e7732-9e9e-4b85-97ff-c325cef44e81",
      userPrincipalName: "pshukla@jacobs-university.de",
    },
    {
      id: "9aa1f2b9-ab2b-4bfa-abd9-437766288223",
      userPrincipalName: "rxhafa@jacobs-university.de",
    },
    {
      id: "30bffabb-4c9d-4468-809e-f7d5a137a993",
      userPrincipalName: "psoanchit@jacobs-university.de",
    },
    {
      id: "73fca33f-6f86-4b43-b2d6-0a9cd9d2035d",
      userPrincipalName: "pthapa@jacobs-university.de",
    },
    {
      id: "ccfe1685-0c8e-4520-84f0-728c30764742",
      userPrincipalName: "nkamov@jacobs-university.de",
    },
    {
      id: "b85ef4f0-eb42-4801-8b57-2b51069416e2",
      userPrincipalName: "pesingh@jacobs-university.de",
    },
    {
      id: "632bd102-5e58-49b6-a3fb-d6959e190b54",
      userPrincipalName: "lperezotei@jacobs-university.de",
    },
    {
      id: "c8251410-2509-4a26-8d2d-4a8a59bd774e",
      userPrincipalName: "cnoren@jacobs-university.de",
    },
    {
      id: "2e467987-4754-4453-af8e-1910854c5934",
      userPrincipalName: "animoni@jacobs-university.de",
    },
    {
      id: "69f6b815-e0a3-44c0-b45d-312eac9ca2d8",
      userPrincipalName: "wpeoples@jacobs-university.de",
    },
    {
      id: "cac7843b-d367-447f-a79e-17d969e0ed80",
      userPrincipalName: "dmoreno@jacobs-university.de",
    },
    {
      id: "f0d4326e-db20-4083-b67c-8cc27144e57e",
      userPrincipalName: "cmarimo@jacobs-university.de",
    },
    {
      id: "ea89b3b2-6b09-477d-8a76-00f2acefd442",
      userPrincipalName: "dzablah@jacobs-university.de",
    },
    {
      id: "181c7e75-35b8-46e3-ba7b-227cdb3c32c7",
      userPrincipalName: "achristie@jacobs-university.de",
    },
    {
      id: "46be15c7-1aaf-4487-9c28-8fa6e80414d6",
      userPrincipalName: "aengels@jacobs-university.de",
    },
    {
      id: "1a6521e8-c01f-415f-9318-9eaf45d749cb",
      userPrincipalName: "muhshah@jacobs-university.de",
    },
    {
      id: "f99b7b50-5a0c-4679-b5c3-3bd74f7f3e0c",
      userPrincipalName: "gramossili@jacobs-university.de",
    },
    {
      id: "d4337452-51a0-4d72-9363-1de4d3114bd2",
      userPrincipalName: "dadhami@jacobs-university.de",
    },
    {
      id: "4dca0692-ade1-441a-aec7-61453f61e947",
      userPrincipalName: "qsamad@jacobs-university.de",
    },
    {
      id: "709978d9-a38a-43e7-8999-01d22ae04717",
      userPrincipalName: "muzafar@jacobs-university.de",
    },
    {
      id: "90a02f0f-b531-4298-a0f0-69222ebb0f52",
      userPrincipalName: "mdemaj@jacobs-university.de",
    },
    {
      id: "fd835e91-e4cf-4e04-8495-26ef85fa4bb3",
      userPrincipalName: "fajalees@jacobs-university.de",
    },
    {
      id: "cb16e94a-c18e-44ef-8b90-20c17115b04e",
      userPrincipalName: "samirkhani@jacobs-university.de",
    },
    {
      id: "81e33843-2106-41c7-a932-b536ff164ed2",
      userPrincipalName: "vhochdahl@jacobs-university.de",
    },
    {
      id: "8eef401b-c055-48fd-9d41-34d773fef7fa",
      userPrincipalName: "askryzhadl@jacobs-university.de",
    },
    {
      id: "6139da5d-1b0e-4a22-b1f6-a4429c63438d",
      userPrincipalName: "bimran@jacobs-university.de",
    },
    {
      id: "0b3b00a5-fda9-4dc0-962b-553949a882a7",
      userPrincipalName: "asavu@jacobs-university.de",
    },
    {
      id: "a9f7ff1c-3f56-45f1-8a33-feeb409f15d5",
      userPrincipalName: "liskurti@jacobs-university.de",
    },
    {
      id: "a6d54642-1a42-44eb-a71b-2d05a7f73da8",
      userPrincipalName: "lbolayela@jacobs-university.de",
    },
    {
      id: "ab646152-c11d-4e04-aca2-7235064baf78",
      userPrincipalName: "ttocmacov@jacobs-university.de",
    },
    {
      id: "26cb1e33-7998-4555-831e-a8eae181113b",
      userPrincipalName: "avats@jacobs-university.de",
    },
    {
      id: "1060549f-d811-408b-bd2c-e2846527e26c",
      userPrincipalName: "siahmed@jacobs-university.de",
    },
    {
      id: "c779533d-cf27-45d4-aa82-a3f9862fd8d0",
      userPrincipalName: "aberhane@jacobs-university.de",
    },
    {
      id: "603387f6-c237-410b-a80c-8616917b8b3e",
      userPrincipalName: "imatsaberi@jacobs-university.de",
    },
    {
      id: "49cbe30f-27ff-4eb7-90c7-172db6b20efd",
      userPrincipalName: "ashahmed@jacobs-university.de",
    },
    {
      id: "bbeea860-0e7c-427d-a29b-8fab540c8d20",
      userPrincipalName: "fpapa@jacobs-university.de",
    },
    {
      id: "2474eec0-5ad1-451c-9112-c6ad0b4dc8a6",
      userPrincipalName: "mkayijamah@jacobs-university.de",
    },
    {
      id: "f4950ac1-cea8-4a7e-afc3-27dd2a8ce250",
      userPrincipalName: "bfranco@jacobs-university.de",
    },
    {
      id: "1e729b76-a03d-49b7-bdaf-d2b1a7302dc2",
      userPrincipalName: "magrawal@jacobs-university.de",
    },
    {
      id: "8f1c2506-9851-4c8d-a4b5-07572e3867e7",
      userPrincipalName: "kisousa@jacobs-university.de",
    },
    {
      id: "c7d02d2b-aa74-4a52-8bcf-ad7410273e1a",
      userPrincipalName: "aladjimi@jacobs-university.de",
    },
    {
      id: "af0adbcc-9e1f-4080-81cf-0bb01a033c60",
      userPrincipalName: "nabbas@jacobs-university.de",
    },
    {
      id: "3f236bdb-ed82-41c9-85f2-ca0a6a8b5855",
      userPrincipalName: "ykabashi@jacobs-university.de",
    },
    {
      id: "932aefcc-a233-4098-a537-a76bbef8c7b4",
      userPrincipalName: "mrothevand@jacobs-university.de",
    },
    {
      id: "4f57b731-24b7-4677-9bc9-9c0caadc64b7",
      userPrincipalName: "cwong@jacobs-university.de",
    },
    {
      id: "c9673ada-c874-4540-b212-f8900ca752b1",
      userPrincipalName: "kadesanya@jacobs-university.de",
    },
    {
      id: "44ac1fb0-7018-473f-881f-c088857a8a56",
      userPrincipalName: "ahenish@jacobs-university.de",
    },
    {
      id: "60575a9c-21ea-40b5-a5fc-6a0ff603c7f4",
      userPrincipalName: "dipandey@jacobs-university.de",
    },
    {
      id: "32bba95e-9981-4a3d-8e11-b723987054f2",
      userPrincipalName: "oneumark@jacobs-university.de",
    },
    {
      id: "cd7ba4af-9aa7-4fe2-a229-972d5611711f",
      userPrincipalName: "minguyen@jacobs-university.de",
    },
    {
      id: "a7bc3b7e-ef96-44b9-84c8-b058a2dbd286",
      userPrincipalName: "tinguyen@jacobs-university.de",
    },
    {
      id: "395df386-b548-4d78-af26-e3560cde2ef5",
      userPrincipalName: "aourairat@jacobs-university.de",
    },
    {
      id: "3289f73c-9f34-4ed2-975f-0e69c9dff44f",
      userPrincipalName: "tpham@jacobs-university.de",
    },
    {
      id: "4685f28d-674b-4d70-bb95-b46170866878",
      userPrincipalName: "mpasho@jacobs-university.de",
    },
    {
      id: "35290a48-4cd4-46eb-aadd-e2cffccf2da1",
      userPrincipalName: "lpapadimit@jacobs-university.de",
    },
    {
      id: "c29f42c2-bbc7-4a73-a295-3e8d15d611b4",
      userPrincipalName: "snancheva@jacobs-university.de",
    },
    {
      id: "2e9c5040-373c-474f-b2bc-a8e0e58958da",
      userPrincipalName: "kndhlovu@jacobs-university.de",
    },
    {
      id: "c8b6f1af-3ee0-4941-bdef-7b5fde3b59a4",
      userPrincipalName: "jlaborde@jacobs-university.de",
    },
    {
      id: "f3ec1e73-b067-42f8-afc9-e210f24e5087",
      userPrincipalName: "acalixlara@jacobs-university.de",
    },
    {
      id: "a0082629-8022-4745-8a3a-6036fc73c371",
      userPrincipalName: "hzheng@jacobs-university.de",
    },
    {
      id: "efbf94d7-cc1c-4052-83cd-f22d5f6d2c6a",
      userPrincipalName: "ehaxhiaj@jacobs-university.de",
    },
    {
      id: "76a7e14e-7210-43fc-a671-0ea688f6cfe1",
      userPrincipalName: "aeichner@jacobs-university.de",
    },
    {
      id: "d21ac8c7-f7c3-41cf-9fcc-118484b6745b",
      userPrincipalName: "spaudel@jacobs-university.de",
    },
    {
      id: "64dd7b33-81f5-43c5-94e0-e8b9e17a45c1",
      userPrincipalName: "shashmi@jacobs-university.de",
    },
    {
      id: "33b9aced-7631-4271-826f-a6cc081e501b",
      userPrincipalName: "fusman@jacobs-university.de",
    },
    {
      id: "5b877897-c500-4161-899f-9d1a9f7d59b4",
      userPrincipalName: "zma@jacobs-university.de",
    },
    {
      id: "7c8713a0-ecae-4f25-a586-885a7da44e4d",
      userPrincipalName: "thasloop@jacobs-university.de",
    },
    {
      id: "e8b19b8d-3910-41de-a001-cbfdd0825e8d",
      userPrincipalName: "ahaiderzai@jacobs-university.de",
    },
    {
      id: "0a7d696c-895b-4c05-a3b1-e81bca59d637",
      userPrincipalName: "yuzheng@jacobs-university.de",
    },
    {
      id: "b57c2e0f-13a6-44d0-b642-9061fea57cb5",
      userPrincipalName: "adadel@jacobs-university.de",
    },
    {
      id: "93f6a39f-1396-441e-80dd-61e254965ea5",
      userPrincipalName: "iakdemir@jacobs-university.de",
    },
    {
      id: "a32ee144-42d3-4837-8cfe-30e3c486b491",
      userPrincipalName: "abrauniyar@jacobs-university.de",
    },
    {
      id: "468b4945-35c1-4fe2-ba5c-8d17e6c2d25f",
      userPrincipalName: "hhayak@jacobs-university.de",
    },
    {
      id: "c662e567-ae32-4534-b80b-6aa03eb8c7d5",
      userPrincipalName: "nadhikari@jacobs-university.de",
    },
    {
      id: "e0b91ba3-c30a-4e3d-82ef-8d4ad213e1d5",
      userPrincipalName: "tmischel@jacobs-university.de",
    },
    {
      id: "d84ccec1-93a4-4173-af04-0369698360bd",
      userPrincipalName: "csanchezga@jacobs-university.de",
    },
    {
      id: "231e05cb-1e91-48c2-95a9-8d7e723f79bd",
      userPrincipalName: "roshah@jacobs-university.de",
    },
    {
      id: "68fccb76-9b62-47a7-9c03-c7ba88a918b4",
      userPrincipalName: "adas@jacobs-university.de",
    },
    {
      id: "4fe2573c-48c1-4159-94ae-8ae3e351477d",
      userPrincipalName: "alazaj@jacobs-university.de",
    },
    {
      id: "3c957e3d-7fb6-4bbc-a2d7-06e683a065bb",
      userPrincipalName: "ujha@jacobs-university.de",
    },
    {
      id: "4ada4664-3e94-4036-a91a-0b06f96fd734",
      userPrincipalName: "adogru@jacobs-university.de",
    },
    {
      id: "0a2d7937-b572-46fa-8e92-9384805804d3",
      userPrincipalName: "aalmoulki@jacobs-university.de",
    },
    {
      id: "f597d178-efaa-4135-8bd4-6621db4e6bca",
      userPrincipalName: "aelbourakk@jacobs-university.de",
    },
    {
      id: "618f2f12-da33-4c91-bc04-0130a30eaa72",
      userPrincipalName: "xtao@jacobs-university.de",
    },
    {
      id: "da0fe5d8-c003-49e5-b6dd-2e8caf71acb4",
      userPrincipalName: "haahmed@jacobs-university.de",
    },
    {
      id: "117d9112-30d1-42b4-867f-03f7fc690dec",
      userPrincipalName: "cbhattacha@jacobs-university.de",
    },
    {
      id: "626bc832-4fb9-4638-89fd-079c1a2964dc",
      userPrincipalName: "sabusaada@jacobs-university.de",
    },
    {
      id: "20b4c5c0-5be9-4a82-93c5-338225ace622",
      userPrincipalName: "xiuli@jacobs-university.de",
    },
    {
      id: "1cd32d79-0dfd-43f3-91a5-b17951379258",
      userPrincipalName: "truemper@jacobs-university.de",
    },
    {
      id: "be9e2367-fc26-4b00-8f37-d5b5229fe5d5",
      userPrincipalName: "vterziev@jacobs-university.de",
    },
    {
      id: "56fe3bc2-66d3-4f10-b126-b1d87fb0b00d",
      userPrincipalName: "vsmakaj@jacobs-university.de",
    },
    {
      id: "57e1ea6b-8ae1-4b4e-8378-9dc9756c32a9",
      userPrincipalName: "tchowhan@jacobs-university.de",
    },
    {
      id: "6fccc1cc-0328-4a2e-8335-55a217707bb0",
      userPrincipalName: "aismailaj@jacobs-university.de",
    },
    {
      id: "5529afe3-5bcb-49f5-a57e-ce9eb832b58e",
      userPrincipalName: "tvukcevic@jacobs-university.de",
    },
    {
      id: "ccb344d0-f821-432a-bed1-6d443c6d643c",
      userPrincipalName: "tmauck@jacobs-university.de",
    },
    {
      id: "7766ec05-f8b2-4749-a167-d3fd93b94988",
      userPrincipalName: "ivornsand@jacobs-university.de",
    },
    {
      id: "a4fb8d4c-2909-42fc-b4fe-1e6308be8466",
      userPrincipalName: "walee@jacobs-university.de",
    },
    {
      id: "9af847a3-e793-4bc6-9b9d-ea73042de304",
      userPrincipalName: "spralle@jacobs-university.de",
    },
    {
      id: "e60bc0ec-45c5-4d9f-81c9-65cb112255eb",
      userPrincipalName: "cvaghela@jacobs-university.de",
    },
    {
      id: "ef2f5ea0-cea1-49b1-b83e-3c56d69c8f9b",
      userPrincipalName: "bnakatte@jacobs-university.de",
    },
    {
      id: "f5a20dd5-3b5d-4c8a-8bef-ba803b05aea3",
      userPrincipalName: "radidela@jacobs-university.de",
    },
    {
      id: "f444746e-5494-477c-9e9f-7938a39b677c",
      userPrincipalName: "nruiz@jacobs-university.de",
    },
    {
      id: "945c39d7-12ef-4a2a-9e4f-43bc54c866e4",
      userPrincipalName: "cnyateka@jacobs-university.de",
    },
    {
      id: "68a998b4-c497-4c9a-a1d4-d7a121d2575b",
      userPrincipalName: "smityushki@jacobs-university.de",
    },
    {
      id: "634688c7-3ac2-49ab-81eb-d899b1e57fbc",
      userPrincipalName: "mduraj@jacobs-university.de",
    },
    {
      id: "7b548a2e-db17-4bfb-95e7-9581559a69cb",
      userPrincipalName: "zhzhu@jacobs-university.de",
    },
    {
      id: "2ea488d0-e720-4b61-b64d-1a9feb6f66cc",
      userPrincipalName: "maguilar@jacobs-university.de",
    },
    {
      id: "9e4d9449-6bb3-41af-aa63-3c13f68c7a0f",
      userPrincipalName: "mcastano@jacobs-university.de",
    },
    {
      id: "f16dd717-b614-49a1-ad35-528e12d7ba6a",
      userPrincipalName: "maji@jacobs-university.de",
    },
    {
      id: "13ce75ab-04b2-4c5e-b8fd-8f41ca3560c7",
      userPrincipalName: "cclichici@jacobs-university.de",
    },
    {
      id: "8fe6a186-4f9f-4574-ae65-e42016aedc30",
      userPrincipalName: "sejang@jacobs-university.de",
    },
    {
      id: "250f8c06-79e3-44bb-a0df-69b81c3518a3",
      userPrincipalName: "wkhawly@jacobs-university.de",
    },
    {
      id: "02a911bd-4344-4be8-8532-cd635b138aed",
      userPrincipalName: "salkhateeb@jacobs-university.de",
    },
    {
      id: "bab649c5-d33d-4fe9-acf3-5ca6c43858a5",
      userPrincipalName: "sluitel@jacobs-university.de",
    },
    {
      id: "725c5119-2a59-46b7-b49d-52649e311494",
      userPrincipalName: "anighosh@jacobs-university.de",
    },
    {
      id: "ee56369c-7d66-4a69-b2e6-b50488c4a8a7",
      userPrincipalName: "mbaronesse@jacobs-university.de",
    },
    {
      id: "a577f11f-9601-442d-a032-456d06fa5ca4",
      userPrincipalName: "fsow@jacobs-university.de",
    },
    {
      id: "ac03b9ce-bd9a-4d4c-baf6-8aaf5b3efdcf",
      userPrincipalName: "scarbunaru@jacobs-university.de",
    },
    {
      id: "453bc663-5535-45dd-b584-5af1a1266c3c",
      userPrincipalName: "crodeznoca@jacobs-university.de",
    },
    {
      id: "b084cd7c-7280-4fac-84ed-00613be103fe",
      userPrincipalName: "hhajiyev@jacobs-university.de",
    },
    {
      id: "5d93b157-59f6-4c62-96ff-1bcd3d056a03",
      userPrincipalName: "njackson@jacobs-university.de",
    },
    {
      id: "53fc6f15-fc98-4d16-a426-e1881e69163b",
      userPrincipalName: "prtiwari@jacobs-university.de",
    },
    {
      id: "c83d84b0-bfef-420b-adeb-6e07f288ddf1",
      userPrincipalName: "sschmack@jacobs-university.de",
    },
    {
      id: "9b157f29-9984-46eb-89bf-84231fc981a4",
      userPrincipalName: "vgabiro@jacobs-university.de",
    },
    {
      id: "c98a52a1-9c9e-4ee0-a2d1-911cb5a4a893",
      userPrincipalName: "galmuftah@jacobs-university.de",
    },
    {
      id: "7792937d-0df7-410b-9eb8-9f116571c202",
      userPrincipalName: "bshrestha@jacobs-university.de",
    },
    {
      id: "159458e1-ce85-4d8b-b01e-e154aead701d",
      userPrincipalName: "msyed@jacobs-university.de",
    },
    {
      id: "71388ec3-8420-461a-88e9-c8301d6de190",
      userPrincipalName: "lhamadalla@jacobs-university.de",
    },
    {
      id: "aea82526-4a6e-437e-9f11-9f23734258d6",
      userPrincipalName: "msmaili@jacobs-university.de",
    },
    {
      id: "cf0e6f49-204a-4b3a-8f04-d62230cd6dd7",
      userPrincipalName: "vpotecu@jacobs-university.de",
    },
    {
      id: "f0ecaa81-eb63-4bff-821a-61817f81c280",
      userPrincipalName: "marweller@jacobs-university.de",
    },
    {
      id: "8987fefd-515d-4a13-8b83-620ab43d8af7",
      userPrincipalName: "nzaitsev@jacobs-university.de",
    },
    {
      id: "e63a50d3-f2d5-48a6-a9d4-856cdc2e632a",
      userPrincipalName: "jspalevic@jacobs-university.de",
    },
    {
      id: "7907e33e-ade9-4590-848a-b16e57c46750",
      userPrincipalName: "abpandey@jacobs-university.de",
    },
    {
      id: "06d88b42-0dea-4bdb-a822-6957edd0b1b4",
      userPrincipalName: "ynebebe@jacobs-university.de",
    },
    {
      id: "289856de-77f5-43ca-b43c-b416b61d24ed",
      userPrincipalName: "boliveira@jacobs-university.de",
    },
    {
      id: "dce94205-d055-487a-b027-4da7a8b1ccd8",
      userPrincipalName: "bnjiru@jacobs-university.de",
    },
    {
      id: "54424208-b5fa-42e1-bd68-f494a862b1b2",
      userPrincipalName: "rnewmangat@jacobs-university.de",
    },
    {
      id: "77c9f949-531b-49ec-b822-8ae789a6c31b",
      userPrincipalName: "oalashkar@jacobs-university.de",
    },
    {
      id: "eca0fda3-f953-4c3f-a0c5-5883d21a8a43",
      userPrincipalName: "mpinedamal@jacobs-university.de",
    },
    {
      id: "8eee8717-cbd6-47b9-ae61-86bfa059143a",
      userPrincipalName: "apandit@jacobs-university.de",
    },
    {
      id: "a87b1e58-b016-4159-a007-fef2c00f0cb0",
      userPrincipalName: "kokoli@jacobs-university.de",
    },
    {
      id: "eaa77f16-e419-48de-8a08-672b345e6185",
      userPrincipalName: "iferreira@jacobs-university.de",
    },
    {
      id: "712f6232-2ad6-499d-a92d-508dcc8fb187",
      userPrincipalName: "troewer@jacobs-university.de",
    },
    {
      id: "c697c60a-c7ec-4e1c-acb1-3ab5bbc1c4ec",
      userPrincipalName: "kcroker@jacobs-university.de",
    },
    {
      id: "7adcfe4d-74a1-4b5b-94d6-284584518c8b",
      userPrincipalName: "brobleto@jacobs-university.de",
    },
    {
      id: "5ccaf4dd-1d76-4ac5-97f8-322d935d3624",
      userPrincipalName: "mlawas@jacobs-university.de",
    },
    {
      id: "ba55c135-0cf7-42ba-b2d2-c66ae34b22e5",
      userPrincipalName: "akarachent@jacobs-university.de",
    },
    {
      id: "896cb3de-31f1-4f16-bd84-2212ecbeda87",
      userPrincipalName: "jjiang@jacobs-university.de",
    },
    {
      id: "b7aca090-929b-4ad1-86d6-97d62f73d827",
      userPrincipalName: "andagire@jacobs-university.de",
    },
    {
      id: "166c47f6-4bde-4cf6-b9ae-638c2ea4c681",
      userPrincipalName: "abo@jacobs-university.de",
    },
    {
      id: "7c9a967e-169f-4fdf-adc7-34ca3379be7f",
      userPrincipalName: "siskandary@jacobs-university.de",
    },
    {
      id: "c3ca418b-66b3-43b4-8d04-e0e7b29b2104",
      userPrincipalName: "akhutsaidz@jacobs-university.de",
    },
    {
      id: "c1f6cc8f-77fd-4541-8186-5deff0bfcd42",
      userPrincipalName: "rbenali@jacobs-university.de",
    },
    {
      id: "f3431a2c-5841-4fac-8c34-58ce5db32054",
      userPrincipalName: "rkracke@jacobs-university.de",
    },
    {
      id: "9ce7a89f-1ab5-49ae-8088-3e2c18bfbd22",
      userPrincipalName: "cayong@jacobs-university.de",
    },
    {
      id: "ed16c119-45b5-455c-918f-2edaa3025fb8",
      userPrincipalName: "tymerhalil@jacobs-university.de",
    },
    {
      id: "a9f18c9e-46b1-4c2c-8097-bab15eb453eb",
      userPrincipalName: "ahuseynli@jacobs-university.de",
    },
    {
      id: "4362cb1d-06e8-4d63-a878-71edb716df11",
      userPrincipalName: "rhabte@jacobs-university.de",
    },
    {
      id: "3068898c-f1a2-43fa-8842-e8333e07054f",
      userPrincipalName: "adevos@jacobs-university.de",
    },
    {
      id: "d9e0fe3b-7d49-4d55-a4cc-f0560b8587f4",
      userPrincipalName: "kmajingo@jacobs-university.de",
    },
    {
      id: "07c310e4-2975-42ad-91ea-5a3225002a48",
      userPrincipalName: "adojha@jacobs-university.de",
    },
    {
      id: "f1f399b8-5050-476a-b392-f4cc68e9f4ec",
      userPrincipalName: "bpandey@jacobs-university.de",
    },
    {
      id: "2816aab4-0998-43cc-be0c-6f1b9cf6cab1",
      userPrincipalName: "jbelghiti@jacobs-university.de",
    },
    {
      id: "0e60f0a3-eda4-4fd4-b044-a2704a4494ea",
      userPrincipalName: "fqadir@jacobs-university.de",
    },
    {
      id: "63b3cbf2-5b8d-4776-b0e6-133050fcd39c",
      userPrincipalName: "naliu@jacobs-university.de",
    },
    {
      id: "0dd0fde9-87bd-41ed-af08-23e044be5487",
      userPrincipalName: "helfayez@jacobs-university.de",
    },
    {
      id: "48eaab3e-4f5e-47fe-9bb9-e2f22fa2f4de",
      userPrincipalName: "amahat@jacobs-university.de",
    },
    {
      id: "1aa9f4aa-f2d7-4ca9-a18a-947c2006d962",
      userPrincipalName: "cfongang@jacobs-university.de",
    },
    {
      id: "c08106d9-70a7-4ac0-9199-3140463a7569",
      userPrincipalName: "mmaaroufi@jacobs-university.de",
    },
    {
      id: "64c441bf-b17f-4682-a9c2-f3db6962ea56",
      userPrincipalName: "monoor@jacobs-university.de",
    },
    {
      id: "bd3c1196-f7e7-472d-84ee-503694125d5a",
      userPrincipalName: "kholmes@jacobs-university.de",
    },
    {
      id: "1d8ea81c-c5d6-47ac-8ca3-ee1f1b6a3874",
      userPrincipalName: "rkarimli@jacobs-university.de",
    },
    {
      id: "d90a71bc-8b46-4f4e-b45c-d395273fdfeb",
      userPrincipalName: "pcastillo@jacobs-university.de",
    },
    {
      id: "eec99b69-e13a-43bd-8f9d-aba257bbc6f0",
      userPrincipalName: "pgramberg@jacobs-university.de",
    },
    {
      id: "d63fbc20-4f70-469d-b753-89e36961bb98",
      userPrincipalName: "aansari@jacobs-university.de",
    },
    {
      id: "8972fe0f-fbe8-4942-a51d-8a7f24d687b4",
      userPrincipalName: "sdauer@jacobs-university.de",
    },
    {
      id: "c70516e7-63c9-4072-95f1-7619efa27044",
      userPrincipalName: "baytac@jacobs-university.de",
    },
    {
      id: "35365427-5f5a-4cc5-ac54-4ff6d011925e",
      userPrincipalName: "aarega@jacobs-university.de",
    },
    {
      id: "241dce18-f2c9-474f-9c3d-429ec60ccf55",
      userPrincipalName: "nvorrink@jacobs-university.de",
    },
    {
      id: "f76add04-7c35-4f4e-a228-67881aa68375",
      userPrincipalName: "ikabanda@jacobs-university.de",
    },
    {
      id: "8f90b38b-391b-4c58-ba7b-1e6e432539e0",
      userPrincipalName: "hsota@jacobs-university.de",
    },
    {
      id: "60fd7f36-0c43-4531-a036-263fa0ab17f0",
      userPrincipalName: "lkeim@jacobs-university.de",
    },
    {
      id: "513bb133-4e1c-45df-a3b0-2914f4a23296",
      userPrincipalName: "jsquire@jacobs-university.de",
    },
    {
      id: "0afa6362-af27-4018-b2ce-34563c4cd136",
      userPrincipalName: "kranasingh@jacobs-university.de",
    },
    {
      id: "59844b38-b822-41bc-8fb5-5000c296d489",
      userPrincipalName: "ccavender@jacobs-university.de",
    },
    {
      id: "e4cf5b63-ef12-4513-ba6f-be0c725d0def",
      userPrincipalName: "zkonsbayev@jacobs-university.de",
    },
    {
      id: "5a048e2e-4ec5-4d01-8e11-64533118b104",
      userPrincipalName: "nfujimoto@jacobs-university.de",
    },
    {
      id: "086889b1-c80a-4206-8cdf-998f816e981e",
      userPrincipalName: "eskura@jacobs-university.de",
    },
    {
      id: "2238437e-aeaf-4999-910b-d6258fa2170b",
      userPrincipalName: "afruit@jacobs-university.de",
    },
    {
      id: "e8046a97-3fb4-4dbd-8a71-cd8c1712943a",
      userPrincipalName: "kkeaikitse@jacobs-university.de",
    },
    {
      id: "c087dd05-43af-49f6-8fb2-a6343a7b45e2",
      userPrincipalName: "tncube@jacobs-university.de",
    },
    {
      id: "06d95d36-3402-4996-be5c-4b94bd11f6b5",
      userPrincipalName: "kachen@jacobs-university.de",
    },
    {
      id: "21d276af-1a9e-4987-abfc-726f7e81d966",
      userPrincipalName: "soyadav@jacobs-university.de",
    },
    {
      id: "9b3a150c-356c-4329-88a6-f40bb25d26f5",
      userPrincipalName: "bselami@jacobs-university.de",
    },
    {
      id: "01ade5ed-01a6-4076-9b41-7553c7f4a3b6",
      userPrincipalName: "dtsayem@jacobs-university.de",
    },
    {
      id: "cae7809e-6927-4d9f-9e48-1f5ae57fddcd",
      userPrincipalName: "halnahas@jacobs-university.de",
    },
    {
      id: "144495db-f2c2-4c8f-b520-be0760685ceb",
      userPrincipalName: "idervishi@jacobs-university.de",
    },
    {
      id: "87cdb833-2e63-49f3-bda9-ff91fcf75073",
      userPrincipalName: "tgankhuyag@jacobs-university.de",
    },
    {
      id: "8a3129e1-ae62-4fb2-b8c9-c21152678775",
      userPrincipalName: "gmarku@jacobs-university.de",
    },
    {
      id: "96eb33f2-db52-46c7-9e12-81b5bd8decac",
      userPrincipalName: "nisingh@jacobs-university.de",
    },
    {
      id: "4f963698-e0aa-4a80-afbc-e7168f19ecc2",
      userPrincipalName: "mhaile@jacobs-university.de",
    },
    {
      id: "4804705a-e5ea-4e38-a153-7de6037dd688",
      userPrincipalName: "yakbar@jacobs-university.de",
    },
    {
      id: "c6d9ad1f-0c1d-4f9c-b35a-ae54508e25b2",
      userPrincipalName: "ehasanaj@jacobs-university.de",
    },
    {
      id: "7d736817-3e49-4efc-be78-69c0a7b95851",
      userPrincipalName: "atun@jacobs-university.de",
    },
    {
      id: "bdabb9a5-ad80-4761-823e-984918702918",
      userPrincipalName: "schaurasia@jacobs-university.de",
    },
    {
      id: "55b3b763-9e10-47b4-b9c8-f79dc4e5ee09",
      userPrincipalName: "rsexton@jacobs-university.de",
    },
    {
      id: "77f54e6d-8297-498f-ab65-98df12c10d41",
      userPrincipalName: "eisljami@jacobs-university.de",
    },
    {
      id: "78d9bfe2-4fff-4557-804f-b6f447f9e886",
      userPrincipalName: "fbrandenbu@jacobs-university.de",
    },
    {
      id: "722b7eb0-b477-4c1f-b1f6-3b76f2f7c9ea",
      userPrincipalName: "sworku@jacobs-university.de",
    },
    {
      id: "1e8450bc-6313-4b20-bb4f-dd89d6701482",
      userPrincipalName: "jvaughn@jacobs-university.de",
    },
    {
      id: "cec67bfe-a95d-4522-bce1-c56c02ebd833",
      userPrincipalName: "shannig@jacobs-university.de",
    },
    {
      id: "b60d2f6c-1179-4091-bb11-6152597dc300",
      userPrincipalName: "ctrujillo@jacobs-university.de",
    },
    {
      id: "204491cd-14c4-4595-80aa-30d518dfe3e1",
      userPrincipalName: "cnwakwue@jacobs-university.de",
    },
    {
      id: "918c368b-6fe7-46dc-a02d-33cabd259853",
      userPrincipalName: "nrafizade@jacobs-university.de",
    },
    {
      id: "f613de50-0271-4f5d-9f40-3e6ef0425db7",
      userPrincipalName: "nhnguyen@jacobs-university.de",
    },
    {
      id: "d6517e9e-4ac9-421b-b6f1-caa87d8497e2",
      userPrincipalName: "trunguyen@jacobs-university.de",
    },
    {
      id: "8f638b33-b1f4-424c-afdd-ba09f9d495b2",
      userPrincipalName: "yishaq@jacobs-university.de",
    },
    {
      id: "369f81da-2ec6-45a2-bd00-c47c084f809e",
      userPrincipalName: "ymounaji@jacobs-university.de",
    },
    {
      id: "29f19c2f-8e36-476e-a18d-61e71aa75746",
      userPrincipalName: "dnguyen@jacobs-university.de",
    },
    {
      id: "e6386b9e-79a7-4bd6-8c59-b60a68b611d6",
      userPrincipalName: "yreinhold@jacobs-university.de",
    },
    {
      id: "35d2b5c4-e061-454e-a91b-ac20e0f2224c",
      userPrincipalName: "llim@jacobs-university.de",
    },
    {
      id: "88a6e970-abe6-4fb3-b5a3-e6c84e4c6877",
      userPrincipalName: "rsholi@jacobs-university.de",
    },
    {
      id: "33e6056e-a957-445c-ad44-21df49b5e5e8",
      userPrincipalName: "hbregu@jacobs-university.de",
    },
    {
      id: "b3c6b599-34cf-46ad-bf2a-9591d0a16167",
      userPrincipalName: "bmoreira@jacobs-university.de",
    },
    {
      id: "5733fa9e-3d24-4f57-9e66-e56e97f89d70",
      userPrincipalName: "nkripa@jacobs-university.de",
    },
    {
      id: "f9dd4271-5414-4ee0-9acd-30547adfd063",
      userPrincipalName: "zlaouzi@jacobs-university.de",
    },
    {
      id: "c0730721-0bd1-42fb-ad4a-b368b88ef1d8",
      userPrincipalName: "apalaciosm@jacobs-university.de",
    },
    {
      id: "cbf55c21-5862-4453-891c-2e4a204c26ab",
      userPrincipalName: "jjung@jacobs-university.de",
    },
    {
      id: "431dfc3b-6beb-44d3-8e59-d2144af40760",
      userPrincipalName: "bishrestha@jacobs-university.de",
    },
    {
      id: "e8ca18a8-e1e7-4139-898c-af55277bbda3",
      userPrincipalName: "esalihovic@jacobs-university.de",
    },
    {
      id: "297578bf-187e-466a-a1f3-c535371ef6b4",
      userPrincipalName: "csun@jacobs-university.de",
    },
    {
      id: "f981706a-aa06-48de-b19a-1d55ece7e0a8",
      userPrincipalName: "dbarrangue@jacobs-university.de",
    },
    {
      id: "be8d435f-3989-447c-b2ed-8dc497b82767",
      userPrincipalName: "gakambe@jacobs-university.de",
    },
    {
      id: "4173efd5-8d30-480e-8b72-424d06a62020",
      userPrincipalName: "zsamdani@jacobs-university.de",
    },
    {
      id: "a0ab0de3-c275-42dd-8314-9ed271681f9d",
      userPrincipalName: "sugiri@jacobs-university.de",
    },
    {
      id: "03604943-86d1-437c-8a17-3b3df02e27aa",
      userPrincipalName: "kdeleon@jacobs-university.de",
    },
    {
      id: "c03dd27c-b45c-4606-ad12-460cc67712fe",
      userPrincipalName: "makhmetkul@jacobs-university.de",
    },
    {
      id: "3ec66586-9db9-4e04-bc34-ce4ae1043c88",
      userPrincipalName: "mowais@jacobs-university.de",
    },
    {
      id: "16ac1d76-fbd3-4ed1-9396-8385e17a7593",
      userPrincipalName: "aalashram@jacobs-university.de",
    },
    {
      id: "81171fb1-39b6-438d-95b1-498fcc375335",
      userPrincipalName: "kkravchenk@jacobs-university.de",
    },
    {
      id: "4f81e7fa-e48f-476b-940e-be92aabb1d44",
      userPrincipalName: "raushresth@jacobs-university.de",
    },
    {
      id: "c45efb47-39d5-4454-bd66-905c215cbd4b",
      userPrincipalName: "kdenbi@jacobs-university.de",
    },
    {
      id: "8758ba87-6d58-4d2b-a80e-6c8694c5681c",
      userPrincipalName: "rgrond@jacobs-university.de",
    },
    {
      id: "61d08711-9649-46dc-a91d-41c12ea5b590",
      userPrincipalName: "ikarmali@jacobs-university.de",
    },
    {
      id: "b5902ce8-7be5-4267-aa60-c13de2847da0",
      userPrincipalName: "shamad@jacobs-university.de",
    },
    {
      id: "33f82661-35b9-4b86-a589-546e598cbf7f",
      userPrincipalName: "prpant@jacobs-university.de",
    },
    {
      id: "387b16a6-f085-4c88-abea-8b3f17ddb22b",
      userPrincipalName: "jamatya@jacobs-university.de",
    },
    {
      id: "f61e5eac-79ac-40df-8599-c5d7ba4f7816",
      userPrincipalName: "skeci@jacobs-university.de",
    },
    {
      id: "e956656f-0f13-4bd7-8b10-77e29cc81119",
      userPrincipalName: "akairova@jacobs-university.de",
    },
    {
      id: "f9015611-bd15-48cb-b2c0-d8be10d15995",
      userPrincipalName: "sgurubacha@jacobs-university.de",
    },
    {
      id: "e4efa3eb-3709-48d2-89ca-a8f8654c349a",
      userPrincipalName: "cguerses@jacobs-university.de",
    },
    {
      id: "aa8cd6ca-3803-4702-a923-dfa457d9a1c1",
      userPrincipalName: "kjanjghava@jacobs-university.de",
    },
    {
      id: "5b6de07b-66ec-49f6-a8c4-914f8fc494b6",
      userPrincipalName: "aumholtz@jacobs-university.de",
    },
    {
      id: "11d75806-d8f3-4704-a8cd-34fb1732d69d",
      userPrincipalName: "kwaraich@jacobs-university.de",
    },
    {
      id: "d85df27a-461e-4a41-851a-4ae20729c89b",
      userPrincipalName: "schakhashi@jacobs-university.de",
    },
    {
      id: "38e740b5-d93f-4395-a51d-bc2b8f7c270f",
      userPrincipalName: "musaleem@jacobs-university.de",
    },
    {
      id: "a87553ab-0d3c-4c4c-b2f4-c18ab437badb",
      userPrincipalName: "yzhanpeiss@jacobs-university.de",
    },
    {
      id: "6b7b1b07-3caf-45ad-b054-7be7de07d3cc",
      userPrincipalName: "lsievert@jacobs-university.de",
    },
    {
      id: "1cf60222-3dc1-43ff-881f-0d62c25d8f9e",
      userPrincipalName: "ybacamoral@jacobs-university.de",
    },
    {
      id: "51571894-c987-42b1-bc93-ed17b2661daa",
      userPrincipalName: "aybanjade@jacobs-university.de",
    },
    {
      id: "a1547339-4ea0-4c54-85e7-8afb5cfa7fea",
      userPrincipalName: "nkutatelad@jacobs-university.de",
    },
    {
      id: "78da3d69-c54d-45e7-b222-4d35b6f92c50",
      userPrincipalName: "marain@jacobs-university.de",
    },
    {
      id: "cf86b730-b297-4bc9-99a1-8506ced845d2",
      userPrincipalName: "tyim@jacobs-university.de",
    },
    {
      id: "f772ac5d-4690-4db0-89e6-4d5afe4430a5",
      userPrincipalName: "mgonzalez@jacobs-university.de",
    },
    {
      id: "8975b50f-293b-4de0-a9e4-b9ce2d2482cc",
      userPrincipalName: "hfeddersen@jacobs-university.de",
    },
    {
      id: "e0d9d55a-988e-4124-95fc-33d9bec70829",
      userPrincipalName: "wsiddique@jacobs-university.de",
    },
    {
      id: "339c0c68-2f9b-4946-bc17-30a493195d16",
      userPrincipalName: "nupadhyay@jacobs-university.de",
    },
    {
      id: "8aceddd3-634c-4dce-acf7-1398f80c4269",
      userPrincipalName: "mimenzel@jacobs-university.de",
    },
    {
      id: "ed1d9ffd-2e73-4606-b071-55bf517638a2",
      userPrincipalName: "hball@jacobs-university.de",
    },
    {
      id: "d850afaf-4ad7-4284-bc06-277c73175ea0",
      userPrincipalName: "tlatsabidz@jacobs-university.de",
    },
    {
      id: "207c905f-2237-4fa8-9c0c-15a12d99c3c3",
      userPrincipalName: "kbatista@jacobs-university.de",
    },
    {
      id: "626771b3-33a1-473e-934b-b4dc0c0afff6",
      userPrincipalName: "halbeiruty@jacobs-university.de",
    },
    {
      id: "8489653c-9dda-4ea8-b34e-79758be81c01",
      userPrincipalName: "aaburamada@jacobs-university.de",
    },
    {
      id: "c89cf347-af50-4c07-91bb-acaea91f9088",
      userPrincipalName: "lbrockmeie@jacobs-university.de",
    },
    {
      id: "0bb184ef-198e-45f2-a0b5-592711792be7",
      userPrincipalName: "mushah@jacobs-university.de",
    },
    {
      id: "03f4aa9b-06d3-48f8-92ca-4904fa9d62a6",
      userPrincipalName: "tbeleuta@jacobs-university.de",
    },
    {
      id: "de623747-f836-4430-a548-870d8ee92129",
      userPrincipalName: "hhoppe@jacobs-university.de",
    },
    {
      id: "2f3858f0-5bf9-4f34-b997-7149f2f2d45e",
      userPrincipalName: "zmurvanidz@jacobs-university.de",
    },
    {
      id: "4de3aa1a-0789-403a-9418-a01e2f60f292",
      userPrincipalName: "pabola@jacobs-university.de",
    },
    {
      id: "263522d6-dcae-4096-b6a5-c1e32b39b689",
      userPrincipalName: "blakew@jacobs-university.de",
    },
    {
      id: "de673548-6f56-4e5a-8377-15d59122ca13",
      userPrincipalName: "mtannous@jacobs-university.de",
    },
    {
      id: "0c349518-8225-421b-83ad-e4eabd06b868",
      userPrincipalName: "lmose@jacobs-university.de",
    },
    {
      id: "1290e204-f577-4202-90e6-e78ba0fb75bc",
      userPrincipalName: "zixwang@jacobs-university.de",
    },
    {
      id: "7437d9ff-2887-45ac-87cf-01bfaabcb140",
      userPrincipalName: "amartinez@jacobs-university.de",
    },
    {
      id: "c476ada4-1fed-4591-8b64-256a0083c4da",
      userPrincipalName: "mshaaban@jacobs-university.de",
    },
    {
      id: "16f4b4b9-9552-484b-9d36-47c81ef66395",
      userPrincipalName: "amolinaper@jacobs-university.de",
    },
    {
      id: "166c0b5f-5895-481b-a5b2-3df433b3a8a9",
      userPrincipalName: "rsharko@jacobs-university.de",
    },
    {
      id: "eeb49807-63bb-462f-a00c-4155ea01dfec",
      userPrincipalName: "imarko@jacobs-university.de",
    },
    {
      id: "0812cb70-e243-42c7-b528-478bc48d3f75",
      userPrincipalName: "kkiki@jacobs-university.de",
    },
    {
      id: "c56b395c-5b86-48e0-8839-bdb741fa1530",
      userPrincipalName: "mbabic@jacobs-university.de",
    },
    {
      id: "63c019b7-eb85-4799-b16c-4129da47d9c2",
      userPrincipalName: "jleka@jacobs-university.de",
    },
    {
      id: "b67b6392-eb1b-4ddc-8f99-c4abc21280ad",
      userPrincipalName: "eborisova@jacobs-university.de",
    },
    {
      id: "76f1c49f-a5db-491e-b14f-0fa349f8f453",
      userPrincipalName: "ynguandjeu@jacobs-university.de",
    },
    {
      id: "a4c4080c-6af4-4b61-98e4-8a496258bf57",
      userPrincipalName: "rcarballo@jacobs-university.de",
    },
    {
      id: "c0ec045f-c989-466c-8f98-4baddd17f4ae",
      userPrincipalName: "boh@jacobs-university.de",
    },
    {
      id: "88c5f2e9-10b4-4a6c-b4da-ef0546680425",
      userPrincipalName: "mkislanski@jacobs-university.de",
    },
    {
      id: "6d857ca0-1e23-4f32-8fd2-60073ab861eb",
      userPrincipalName: "ykwon@jacobs-university.de",
    },
    {
      id: "63c45d62-2c22-4251-99b8-93b004451c22",
      userPrincipalName: "mirfan@jacobs-university.de",
    },
    {
      id: "ec3b8de9-5942-4c48-b201-18e4cc54fdd4",
      userPrincipalName: "sruizrada@jacobs-university.de",
    },
    {
      id: "02c7a2ae-2aae-4882-a5a7-e2e01bf5ed1f",
      userPrincipalName: "chhuang@jacobs-university.de",
    },
    {
      id: "eea2d7cc-39e5-4658-bc31-caabc7a47209",
      userPrincipalName: "shbiswas@jacobs-university.de",
    },
    {
      id: "d8fb89ad-ca0b-4866-b9bd-e5cc04f32f65",
      userPrincipalName: "chfongang@jacobs-university.de",
    },
    {
      id: "b5c9a5e7-f02a-4420-b3c4-fb303d4d2eed",
      userPrincipalName: "vmenon@jacobs-university.de",
    },
    {
      id: "5071d4a4-3afd-4083-b1c6-7fb2234ce4ad",
      userPrincipalName: "soo@jacobs-university.de",
    },
    {
      id: "16fd28ae-d42e-4e67-9e2e-5d77ecfd597b",
      userPrincipalName: "gfaiad@jacobs-university.de",
    },
    {
      id: "a8cec277-1beb-465b-99a0-152f6b5b0a34",
      userPrincipalName: "aberkovich@jacobs-university.de",
    },
    {
      id: "12c523c5-d4d1-4070-91f6-a2ef7e9f5438",
      userPrincipalName: "egerbeshi@jacobs-university.de",
    },
    {
      id: "e72e1343-e97f-4383-bb3c-31ab9134331d",
      userPrincipalName: "anurzhumin@jacobs-university.de",
    },
    {
      id: "f044a4aa-8849-4f58-993c-a9ed6ff6f7e5",
      userPrincipalName: "abare@jacobs-university.de",
    },
    {
      id: "aa310288-061a-4664-a27d-a802c44f018b",
      userPrincipalName: "mzhailau@jacobs-university.de",
    },
    {
      id: "d69abae0-4d44-47e8-9979-1795967a5432",
      userPrincipalName: "ibustillo@jacobs-university.de",
    },
    {
      id: "1f812d57-5eb8-49fc-9289-f8950f160e4b",
      userPrincipalName: "hbaddoo@jacobs-university.de",
    },
    {
      id: "92ff4de9-81d2-4778-b879-3f427a2b5b80",
      userPrincipalName: "sazisbekuu@jacobs-university.de",
    },
    {
      id: "6958c401-8072-4605-bb07-9f038a8d2dd3",
      userPrincipalName: "ibenyamna@jacobs-university.de",
    },
    {
      id: "ac03a5ca-180d-428b-845e-6cf684286f77",
      userPrincipalName: "aeshetu@jacobs-university.de",
    },
    {
      id: "ef9cb164-7e0d-43d4-9845-9f946acfce19",
      userPrincipalName: "sschumache@jacobs-university.de",
    },
    {
      id: "48cebc7e-7dc3-425f-a2b8-ceabf0bfb732",
      userPrincipalName: "cbogatzki@jacobs-university.de",
    },
    {
      id: "23c4330b-740f-4d64-8bd2-dc7fecebf70d",
      userPrincipalName: "asabyrrakh@jacobs-university.de",
    },
    {
      id: "12413251-5338-441c-b3f2-366fe69eb8b3",
      userPrincipalName: "cdu@jacobs-university.de",
    },
    {
      id: "108d8e51-10fc-45fd-8b48-0ba62a597645",
      userPrincipalName: "pcavalcant@jacobs-university.de",
    },
    {
      id: "a15bc5f8-5ae1-439d-8c11-41d77d8435c1",
      userPrincipalName: "xinzhang@jacobs-university.de",
    },
    {
      id: "59107454-c64e-4b68-986a-c22eefe314aa",
      userPrincipalName: "hagelopoul@jacobs-university.de",
    },
    {
      id: "3ffc77c0-b47b-4c98-908f-2165c2f5c750",
      userPrincipalName: "aalkhatib@jacobs-university.de",
    },
    {
      id: "7b26f114-d578-43a0-a3ea-52d73136a537",
      userPrincipalName: "jmensah@jacobs-university.de",
    },
    {
      id: "ad93e879-8c6c-4ac8-9909-9134d33764fd",
      userPrincipalName: "ralzain@jacobs-university.de",
    },
    {
      id: "dd1a33bb-f4fe-4489-8443-8896ef34b69f",
      userPrincipalName: "mshakeel@jacobs-university.de",
    },
    {
      id: "d1d69fac-e64a-49f2-9706-a2bee34c9e71",
      userPrincipalName: "ronepal@jacobs-university.de",
    },
    {
      id: "945a63d2-e878-4f4c-adb6-2c5de143a3c7",
      userPrincipalName: "wacquah@jacobs-university.de",
    },
    {
      id: "eef9e1f7-a3b2-4a49-bc65-50fc5e780a31",
      userPrincipalName: "jagarcia@jacobs-university.de",
    },
    {
      id: "f8933c2d-465a-4cda-98bf-31686449a33e",
      userPrincipalName: "yhsaine@jacobs-university.de",
    },
    {
      id: "7891a0f8-1bb5-4f2f-b7a7-e9adfac6f6c2",
      userPrincipalName: "pmanevski@jacobs-university.de",
    },
    {
      id: "a6d6a872-50ff-4aff-8b6b-b4e342d013e2",
      userPrincipalName: "pmuhera@jacobs-university.de",
    },
    {
      id: "ff72249b-6520-4283-897b-61f7addd0ae9",
      userPrincipalName: "lmwema@jacobs-university.de",
    },
    {
      id: "b220ea29-75fd-4898-9258-f4425e91e8e1",
      userPrincipalName: "sponde@jacobs-university.de",
    },
    {
      id: "25e2238e-6fc3-4919-8dda-a76fb5c691a2",
      userPrincipalName: "mscholz@jacobs-university.de",
    },
    {
      id: "18b8b112-52ac-405a-b93e-dfe5a3a7076b",
      userPrincipalName: "fsomuah@jacobs-university.de",
    },
    {
      id: "e1d316a1-1412-48f7-8080-442c8b0297d3",
      userPrincipalName: "mtrost@jacobs-university.de",
    },
    {
      id: "ff86119b-e5e9-409a-afb9-9e0012093542",
      userPrincipalName: "jmccloy@jacobs-university.de",
    },
    {
      id: "a44308d6-c250-47d7-be70-35d530e5e236",
      userPrincipalName: "sbanday@jacobs-university.de",
    },
    {
      id: "8afa1986-6582-4143-94dc-5e218d0776f9",
      userPrincipalName: "jdouthit@jacobs-university.de",
    },
    {
      id: "f8e967eb-3923-4160-840a-a166d4b6d304",
      userPrincipalName: "muhhamza@jacobs-university.de",
    },
    {
      id: "ea78fa80-6498-4b8d-a621-37293087ba2d",
      userPrincipalName: "dolee@jacobs-university.de",
    },
    {
      id: "ca3d754a-ff65-433f-afcb-821d7f828787",
      userPrincipalName: "ekim01@jacobs-university.de",
    },
    {
      id: "ac9a5315-b7e3-4f70-be95-bea294c071c9",
      userPrincipalName: "mastorga@jacobs-university.de",
    },
    {
      id: "aa97bb98-799b-41b4-a965-c9e7b1e1321d",
      userPrincipalName: "dbaronvonm@jacobs-university.de",
    },
    {
      id: "54fce936-8901-47b7-aabd-007144fb9c40",
      userPrincipalName: "qdang@jacobs-university.de",
    },
    {
      id: "af86d667-abb6-4556-994e-d7aee1292667",
      userPrincipalName: "bkaleny@jacobs-university.de",
    },
    {
      id: "48221159-35cc-49bd-8d3c-092b99d73cdc",
      userPrincipalName: "uhysejni@jacobs-university.de",
    },
    {
      id: "d6b0458a-3260-47d5-9e29-59c18f7c7336",
      userPrincipalName: "lmishalov@jacobs-university.de",
    },
    {
      id: "378ff13e-a32c-4b98-94c4-0b74b9d764b0",
      userPrincipalName: "jdakkuri@jacobs-university.de",
    },
    {
      id: "a0f24a31-dd71-4d0b-b0ad-c45f0369bfb2",
      userPrincipalName: "ecobani@jacobs-university.de",
    },
    {
      id: "8adb64d9-77a9-44a8-a61a-22fa33ee36b2",
      userPrincipalName: "hzaw@jacobs-university.de",
    },
    {
      id: "9d58f29c-8c81-4cfc-86f4-854a6c1e83b0",
      userPrincipalName: "cjacobson@jacobs-university.de",
    },
    {
      id: "c7b6f505-a95b-4e41-95c4-dd0fd00b04b8",
      userPrincipalName: "mkamran@jacobs-university.de",
    },
    {
      id: "b9a6d7b3-004c-4293-9ea1-4271b77ebef5",
      userPrincipalName: "meguez@jacobs-university.de",
    },
    {
      id: "5a5a233f-d103-4dec-86f2-6b1cdc3402cc",
      userPrincipalName: "zmirza@jacobs-university.de",
    },
    {
      id: "0e9bd4ff-2e1f-4a0d-9ed0-45cbe95b6ed0",
      userPrincipalName: "hdiethelm@jacobs-university.de",
    },
    {
      id: "fc80e4f3-cc97-47f5-a161-0b6c519208c6",
      userPrincipalName: "aamanbayev@jacobs-university.de",
    },
    {
      id: "7d1275d7-8d2b-4073-a41e-5b253121cc2d",
      userPrincipalName: "lwendt@jacobs-university.de",
    },
    {
      id: "b8f0bf0c-49e2-4dde-9524-6e2fb23ea59e",
      userPrincipalName: "achoisuren@jacobs-university.de",
    },
    {
      id: "d59bc32b-8d87-41c9-bd9c-9dc59e162701",
      userPrincipalName: "lokello@jacobs-university.de",
    },
    {
      id: "26dea9f0-9022-41b0-86a8-3a0028557470",
      userPrincipalName: "dsana@jacobs-university.de",
    },
    {
      id: "bd77a696-aa58-4327-9539-e88df04385d1",
      userPrincipalName: "rspartaku@jacobs-university.de",
    },
    {
      id: "c9501ba2-9be2-404b-9e95-a1fa4986da71",
      userPrincipalName: "ksagovac@jacobs-university.de",
    },
    {
      id: "8d95c177-b67b-4c6e-97fd-c432a1472264",
      userPrincipalName: "mkali@jacobs-university.de",
    },
    {
      id: "181af316-0be8-4cd7-bc68-bfbaa65aba85",
      userPrincipalName: "alamichhan@jacobs-university.de",
    },
    {
      id: "de106179-042b-468b-ad3e-a07aea83a83f",
      userPrincipalName: "tsanadze@jacobs-university.de",
    },
    {
      id: "3ab51784-f49c-4870-8d6e-3ae8b448a5f4",
      userPrincipalName: "mlowenthal@jacobs-university.de",
    },
    {
      id: "fb333d55-a5cf-4dda-9f2d-435766450057",
      userPrincipalName: "slimbu@jacobs-university.de",
    },
    {
      id: "d1d1aac4-8a36-4e28-86ff-880daad20928",
      userPrincipalName: "ejusufati@jacobs-university.de",
    },
    {
      id: "c6decf44-46df-46e6-86c0-92094fa32f10",
      userPrincipalName: "cpiselli@jacobs-university.de",
    },
    {
      id: "443b737d-ad51-4798-a210-ac8440e971f0",
      userPrincipalName: "hmuratovic@jacobs-university.de",
    },
    {
      id: "f6f69046-41c0-4c08-9182-4e8e2fc14f15",
      userPrincipalName: "tmusarrat@jacobs-university.de",
    },
    {
      id: "ccf50201-6366-4c46-8764-b861cfeba0bf",
      userPrincipalName: "dschroeder@jacobs-university.de",
    },
    {
      id: "7485f031-b4d0-4603-b0ba-aa0eb65cdc59",
      userPrincipalName: "dalao@jacobs-university.de",
    },
    {
      id: "4d8f64e4-6f98-4353-a18e-ab60fa101b09",
      userPrincipalName: "jmueller02@jacobs-university.de",
    },
    {
      id: "036afcfb-19a1-4f39-97d6-0ec0709c7423",
      userPrincipalName: "stasellari@jacobs-university.de",
    },
    {
      id: "35ab9e16-53f5-4c75-a343-484fb875eca1",
      userPrincipalName: "jmthandi@jacobs-university.de",
    },
    {
      id: "c4bb82ea-337d-42e0-9859-1abe5a7f65a6",
      userPrincipalName: "skrstevski@jacobs-university.de",
    },
    {
      id: "79ca9d63-7536-4384-ab0c-fdb7ffa739d9",
      userPrincipalName: "fahmad@jacobs-university.de",
    },
    {
      id: "564c8053-895d-4dcd-a211-4b9e905febaf",
      userPrincipalName: "eivanova@jacobs-university.de",
    },
    {
      id: "22602729-b6be-4b14-8851-499237e9018a",
      userPrincipalName: "gturner@jacobs-university.de",
    },
    {
      id: "48cd092e-9ccc-426f-ab5a-7e6b0594d95f",
      userPrincipalName: "apoudel@jacobs-university.de",
    },
    {
      id: "50067ce3-0569-48b6-b9d2-874d95c964b2",
      userPrincipalName: "mpohumi@jacobs-university.de",
    },
    {
      id: "722cf2e3-b5ed-40f2-a3ca-c08aba505992",
      userPrincipalName: "ademrozi@jacobs-university.de",
    },
    {
      id: "7aba05c4-c3d4-4716-ae08-7c3193bf99c7",
      userPrincipalName: "vivanovic@jacobs-university.de",
    },
    {
      id: "647a035f-4080-48a4-ab28-652e87c59753",
      userPrincipalName: "psuarezrah@jacobs-university.de",
    },
    {
      id: "3c744ded-8c29-40d8-b80a-a816cfbc21d1",
      userPrincipalName: "vvizitiv@jacobs-university.de",
    },
    {
      id: "735c2a2e-49c0-4015-8d01-d2bad46dd7b8",
      userPrincipalName: "zozgur@jacobs-university.de",
    },
    {
      id: "822743fd-84cf-46b9-9ad6-b740448a8ee0",
      userPrincipalName: "achavez@jacobs-university.de",
    },
    {
      id: "118ab14c-e4ac-42b2-ab3a-0f0bac5611f0",
      userPrincipalName: "cknuth@jacobs-university.de",
    },
    {
      id: "a3e9612c-a5ab-4e52-8bbc-ec0acd2f48d2",
      userPrincipalName: "isanchezru@jacobs-university.de",
    },
    {
      id: "b36643a6-45b8-4ad3-b847-a64c652fc228",
      userPrincipalName: "aloshi@jacobs-university.de",
    },
    {
      id: "88f38593-9d96-4839-8dc0-2e7e4cdee5c3",
      userPrincipalName: "hali@jacobs-university.de",
    },
    {
      id: "3ced077d-258a-4539-bfef-cb060f9111b3",
      userPrincipalName: "sinyu@jacobs-university.de",
    },
    {
      id: "ca1d6246-afcc-4a38-9b8c-2792e5cb5c7e",
      userPrincipalName: "wsam@jacobs-university.de",
    },
    {
      id: "2bfeb3f3-b99f-4320-bf4c-a09d4294084a",
      userPrincipalName: "nipandey@jacobs-university.de",
    },
    {
      id: "6758aad7-3b48-44c4-ac8d-65880c116d07",
      userPrincipalName: "svasilic@jacobs-university.de",
    },
    {
      id: "62ac5f9c-53d7-4849-bef8-e3468449ea45",
      userPrincipalName: "otropin@jacobs-university.de",
    },
    {
      id: "313051a4-9508-4240-93b9-6e9e6586f82e",
      userPrincipalName: "amawji@jacobs-university.de",
    },
    {
      id: "aa9b6794-b5c2-4a21-a9ef-a34c52ffdb6d",
      userPrincipalName: "nangdembay@jacobs-university.de",
    },
    {
      id: "722ced33-a12b-4355-972c-8e0f61e247cd",
      userPrincipalName: "akuanysh@jacobs-university.de",
    },
    {
      id: "de428071-45d0-421c-aa7c-fdd20ebaf2a3",
      userPrincipalName: "tbhattarai@jacobs-university.de",
    },
    {
      id: "8dd81102-2610-4f20-a465-99eaed568de4",
      userPrincipalName: "lpohumi@jacobs-university.de",
    },
    {
      id: "ab5e4d31-ea7d-4bee-8a74-8462701b1b51",
      userPrincipalName: "bkholikova@jacobs-university.de",
    },
    {
      id: "9bd5af68-e17d-4327-a4ed-f7f4d7d0060b",
      userPrincipalName: "khoworth@jacobs-university.de",
    },
    {
      id: "05e14eee-6de8-4809-902e-545d27607e4a",
      userPrincipalName: "yabeje@jacobs-university.de",
    },
    {
      id: "40b76aac-36a2-4902-b9dd-d137872d38b4",
      userPrincipalName: "jgurakuqi@jacobs-university.de",
    },
    {
      id: "aac85ea2-5672-41c6-a00b-401a8001c138",
      userPrincipalName: "lluehdorff@jacobs-university.de",
    },
    {
      id: "ca219576-f1f0-4ff4-9317-7b5a7ce07dc6",
      userPrincipalName: "bbuergec@jacobs-university.de",
    },
    {
      id: "a30d230d-a89c-4a07-9a0e-b337ba3c5ca5",
      userPrincipalName: "yamissah@jacobs-university.de",
    },
    {
      id: "d6b2068f-8517-4d7b-90c9-762523e77d89",
      userPrincipalName: "yokang@jacobs-university.de",
    },
    {
      id: "63d45d53-d123-40dc-981f-98e6feea180b",
      userPrincipalName: "ylo@jacobs-university.de",
    },
    {
      id: "a38b8139-84a3-4305-b61b-d9f61481fe79",
      userPrincipalName: "haibrahim@jacobs-university.de",
    },
    {
      id: "0850d950-aaa1-49d9-b8f7-c98b0aa7aeba",
      userPrincipalName: "lkrohn@jacobs-university.de",
    },
    {
      id: "1664e2b8-5392-4ffd-a7cf-2c50505d1964",
      userPrincipalName: "makayour@jacobs-university.de",
    },
    {
      id: "3fb474de-0c6b-4dca-9501-4528cf5fe3ab",
      userPrincipalName: "asim@jacobs-university.de",
    },
    {
      id: "bf4642c8-5306-4fd0-9bf8-31e29343a2c0",
      userPrincipalName: "mignjatic@jacobs-university.de",
    },
    {
      id: "5cebdc7f-d104-4949-ac90-40eeb13584a9",
      userPrincipalName: "sshende@jacobs-university.de",
    },
    {
      id: "2910cdf7-572a-44ee-80db-dcdb9a118f14",
      userPrincipalName: "himani@jacobs-university.de",
    },
    {
      id: "62e61f7a-1753-45e2-8505-85f8fe1ab361",
      userPrincipalName: "aakarki@jacobs-university.de",
    },
    {
      id: "4a2c007d-44db-4882-902d-c6822b238348",
      userPrincipalName: "ankarn@jacobs-university.de",
    },
    {
      id: "f891894a-0d79-4715-9132-749ba9ba9f3e",
      userPrincipalName: "rjafarli@jacobs-university.de",
    },
    {
      id: "fb0313ed-7da3-4c22-9515-3fe269b19fbb",
      userPrincipalName: "kernazarov@jacobs-university.de",
    },
    {
      id: "2f4efb6d-55eb-43fb-a960-6872a9bd592c",
      userPrincipalName: "hcheong@jacobs-university.de",
    },
    {
      id: "3f355684-c875-4488-8116-b013fa554201",
      userPrincipalName: "srajhans@jacobs-university.de",
    },
    {
      id: "eb8e9e5a-3a06-445d-ac8a-a7fe4466dacd",
      userPrincipalName: "fsabzi@jacobs-university.de",
    },
    {
      id: "665ec5e9-8f7a-49f8-8113-9a224a8a0db1",
      userPrincipalName: "selziny@jacobs-university.de",
    },
    {
      id: "33281842-f947-4f2e-bbd2-fd9e4be88cc6",
      userPrincipalName: "jomeisterk@jacobs-university.de",
    },
    {
      id: "a0ebfea7-6d8d-4e91-9eac-1e0b1e26cab5",
      userPrincipalName: "lzaragoza@jacobs-university.de",
    },
    {
      id: "3f63b50e-3cc8-4ff3-969f-33a7d2b1e501",
      userPrincipalName: "bessefiany@jacobs-university.de",
    },
    {
      id: "dbfa0a66-51ae-40e0-919e-e3b701e73bf0",
      userPrincipalName: "madeyemi@jacobs-university.de",
    },
    {
      id: "96563f9f-5047-4494-85be-5bf6076c5e17",
      userPrincipalName: "nhabtemich@jacobs-university.de",
    },
    {
      id: "dc2cfdc0-6a27-4006-be16-f1f856460bbc",
      userPrincipalName: "shajiyev@jacobs-university.de",
    },
    {
      id: "0d19ef31-8eda-4fbb-9aa6-a85348034b06",
      userPrincipalName: "eunkim@jacobs-university.de",
    },
    {
      id: "3aae4206-e1d1-47e0-9a95-ad1c6faceab8",
      userPrincipalName: "xcui@jacobs-university.de",
    },
    {
      id: "982989dc-cf94-44ff-b782-1818b676aca5",
      userPrincipalName: "jaschaefer@jacobs-university.de",
    },
    {
      id: "649e27c7-bc11-428a-9175-486501c3e495",
      userPrincipalName: "amazaherit@jacobs-university.de",
    },
    {
      id: "c2709a73-4a70-403c-acf7-1d2b58b75d3b",
      userPrincipalName: "gchoqi@jacobs-university.de",
    },
    {
      id: "a0a06aa1-8757-4915-bd4e-75eaa70a6898",
      userPrincipalName: "cbuck@jacobs-university.de",
    },
    {
      id: "36e1e841-4401-4af4-87c8-a19b8f738fce",
      userPrincipalName: "gbhattarai@jacobs-university.de",
    },
    {
      id: "3b19bb64-0bd4-4c2c-8b03-a2ceaf804c5f",
      userPrincipalName: "menkhbat@jacobs-university.de",
    },
    {
      id: "dacacdc2-1393-47c4-999f-f4a9944ebaf6",
      userPrincipalName: "hhashim@jacobs-university.de",
    },
    {
      id: "890817b4-aa9e-4e7c-b523-bf34f5a961dd",
      userPrincipalName: "njongphiph@jacobs-university.de",
    },
    {
      id: "e2e018dc-393c-4485-97be-54115ac832f3",
      userPrincipalName: "eturdakhun@jacobs-university.de",
    },
    {
      id: "1ee5e53a-3c09-4be8-b5c5-9b1ebbedad44",
      userPrincipalName: "jgillespie@jacobs-university.de",
    },
    {
      id: "060fc236-0d49-44a8-981c-e87f2a52515d",
      userPrincipalName: "mbabadac@jacobs-university.de",
    },
    {
      id: "d047428e-0fe6-446f-b9fb-4fadbcaeee6d",
      userPrincipalName: "lbisenebit@jacobs-university.de",
    },
    {
      id: "96e37770-c3d4-43d0-b458-fa2906c8ab5e",
      userPrincipalName: "vjoshi@jacobs-university.de",
    },
    {
      id: "f3247918-4a28-4c32-b4d4-4b9f509bf616",
      userPrincipalName: "oecheverri@jacobs-university.de",
    },
    {
      id: "1da05f72-c951-42b2-9fcc-afa9b0a84025",
      userPrincipalName: "lalhasan@jacobs-university.de",
    },
    {
      id: "9afde530-e37d-4898-a8ac-121dd9439415",
      userPrincipalName: "mdemse@jacobs-university.de",
    },
    {
      id: "43f24fe5-1f0b-4188-beec-01bb1e17fb73",
      userPrincipalName: "akushwaha@jacobs-university.de",
    },
    {
      id: "34f1cd80-0cd1-4dfa-8053-81a6a0dfc021",
      userPrincipalName: "akacadej@jacobs-university.de",
    },
    {
      id: "831adc0a-fa8d-46b5-aaa8-fc5419711cd5",
      userPrincipalName: "kmathewos@jacobs-university.de",
    },
    {
      id: "510044a3-ca49-49e5-948d-fd15bc80ff17",
      userPrincipalName: "saraut@jacobs-university.de",
    },
    {
      id: "f9abe452-584f-4635-9bd3-1c0d05e48a10",
      userPrincipalName: "dakim@jacobs-university.de",
    },
    {
      id: "cb8f35b7-58bd-4b5a-929e-bb6d8fe5a1db",
      userPrincipalName: "rzaps@jacobs-university.de",
    },
    {
      id: "fc4a3416-f965-4b07-bcda-3cccfb5d6eca",
      userPrincipalName: "mbucalovic@jacobs-university.de",
    },
    {
      id: "8ba6b02a-4d24-40a9-9c0a-bed86dcd4113",
      userPrincipalName: "rpoudel@jacobs-university.de",
    },
    {
      id: "052ab6bb-cf04-465e-a945-5919f82f371f",
      userPrincipalName: "mwoldeyes@jacobs-university.de",
    },
    {
      id: "f8e5bccc-6b7d-4476-b882-2495915f95f9",
      userPrincipalName: "mgallant@jacobs-university.de",
    },
    {
      id: "ae3affec-1cca-4d5d-8b8e-558dbcdd8e45",
      userPrincipalName: "mcandemir@jacobs-university.de",
    },
    {
      id: "fad44f03-d663-4abe-abb8-6115cd8d7bb0",
      userPrincipalName: "gaoh@jacobs-university.de",
    },
    {
      id: "34566a36-b359-409a-a1c0-698e9cda0efe",
      userPrincipalName: "tbehrend@jacobs-university.de",
    },
    {
      id: "afee31c0-9a2a-49a2-b228-b3d294de8497",
      userPrincipalName: "emaleko@jacobs-university.de",
    },
    {
      id: "fad1f5ef-9550-4f73-b79d-8148dd9581e3",
      userPrincipalName: "sbajaba@jacobs-university.de",
    },
    {
      id: "c2ed8359-7234-4369-97d8-521975b7a8af",
      userPrincipalName: "mjang@jacobs-university.de",
    },
    {
      id: "e9826da5-1826-4bfb-b7bf-5fe645d2dac3",
      userPrincipalName: "jnegash@jacobs-university.de",
    },
    {
      id: "aac0c117-911c-4a9c-b738-f4f052e9f189",
      userPrincipalName: "kpiroghlan@jacobs-university.de",
    },
    {
      id: "477fbd13-0d83-4929-b22e-1b4bd033cdbb",
      userPrincipalName: "mmehadi@jacobs-university.de",
    },
    {
      id: "e51fcd84-4c9a-43e1-8426-90cb4b571d40",
      userPrincipalName: "aelhajj@jacobs-university.de",
    },
    {
      id: "40b325d0-adec-4113-b0fb-e28a0ee509d2",
      userPrincipalName: "atekleareg@jacobs-university.de",
    },
    {
      id: "34a782c9-ef0b-418c-b1a5-f949fb621182",
      userPrincipalName: "jcastro@jacobs-university.de",
    },
    {
      id: "e691437d-0006-4ea0-824f-d59d86239dc7",
      userPrincipalName: "ecruz@jacobs-university.de",
    },
    {
      id: "a980c6bb-81a1-45a9-a6ab-da199975f3b0",
      userPrincipalName: "soxu@jacobs-university.de",
    },
    {
      id: "ad3a6e51-a2f9-409f-a533-a8326801a34d",
      userPrincipalName: "bsuleimen@jacobs-university.de",
    },
    {
      id: "e140dc4c-c16c-49c0-8278-48a0c9a5052b",
      userPrincipalName: "lsingares@jacobs-university.de",
    },
    {
      id: "bf748093-79c3-4dac-95c0-ef2bd684bc68",
      userPrincipalName: "msolomonov@jacobs-university.de",
    },
    {
      id: "4e29d120-3e37-4c10-bcef-5e3303b8e1b5",
      userPrincipalName: "mgurra@jacobs-university.de",
    },
    {
      id: "42977d53-eab6-4501-80a2-3af8d85318ae",
      userPrincipalName: "omaacha@jacobs-university.de",
    },
    {
      id: "267abbe5-60d9-4de8-876d-6b2eaa86063d",
      userPrincipalName: "lbakhtadze@jacobs-university.de",
    },
    {
      id: "873d385e-5cb8-493c-af15-be0812960951",
      userPrincipalName: "zramishvil@jacobs-university.de",
    },
    {
      id: "b31c0b9b-b329-4e9c-ad7e-b6356219fbd8",
      userPrincipalName: "bibragimov@jacobs-university.de",
    },
    {
      id: "cdcf4e29-44c5-4be5-a1a4-c7ad02bde24f",
      userPrincipalName: "swoo@jacobs-university.de",
    },
    {
      id: "bd47ac11-a046-4e26-8e59-b2a246fbdacc",
      userPrincipalName: "npradeepku@jacobs-university.de",
    },
    {
      id: "adfa58c6-824b-42a3-9287-07ae32d15765",
      userPrincipalName: "hguba@jacobs-university.de",
    },
    {
      id: "99cd7743-4409-4d1d-add0-cc864227c1ce",
      userPrincipalName: "mqureshi@jacobs-university.de",
    },
    {
      id: "ad7706cd-5c37-4bf2-a5d6-608eb8cb4b0e",
      userPrincipalName: "kwalter@jacobs-university.de",
    },
    {
      id: "67898685-51f5-42d6-9cac-5fbc4602beca",
      userPrincipalName: "tmiler@jacobs-university.de",
    },
    {
      id: "4660e32f-2f91-4c8c-bce7-d1cc47caf5a3",
      userPrincipalName: "ecwik@jacobs-university.de",
    },
    {
      id: "45ec327f-9a5f-4573-8b1a-a3aad4d89cd6",
      userPrincipalName: "araza@jacobs-university.de",
    },
    {
      id: "5f71806c-6a83-4b69-844a-a5ba96845f44",
      userPrincipalName: "gkim@jacobs-university.de",
    },
    {
      id: "2286047a-6e93-4a8f-acfd-947be4407b65",
      userPrincipalName: "mhernandez@jacobs-university.de",
    },
    {
      id: "f6029a1e-4545-44be-945d-61af19b53bb2",
      userPrincipalName: "jwhiteley@jacobs-university.de",
    },
    {
      id: "2d64d9f3-e003-463a-8e3a-95fe7dae30c1",
      userPrincipalName: "aerkinov@jacobs-university.de",
    },
    {
      id: "ccd8bb35-1060-43e4-81a6-8b2c8f7bd91b",
      userPrincipalName: "abanjade@jacobs-university.de",
    },
    {
      id: "2c72db30-ff67-4e0f-8930-63f0d8b12411",
      userPrincipalName: "lberia@jacobs-university.de",
    },
    {
      id: "3432d55e-5487-4ecf-95a3-b2fc8c468fa9",
      userPrincipalName: "mweidelt@jacobs-university.de",
    },
    {
      id: "e4c4287b-22cb-4e7a-8ab6-7fd37593f76a",
      userPrincipalName: "zheliu@jacobs-university.de",
    },
    {
      id: "6fbf57a1-fe96-456d-b987-8b172e60e788",
      userPrincipalName: "adhileep@jacobs-university.de",
    },
    {
      id: "1a2f5046-38e9-4635-bc77-601a94272b44",
      userPrincipalName: "jalzaeem@jacobs-university.de",
    },
    {
      id: "1bcaae76-3546-4a4b-99f1-4e8c7a9ef194",
      userPrincipalName: "ralo@jacobs-university.de",
    },
    {
      id: "f01bed2b-6897-4121-8553-76ba58bf26ac",
      userPrincipalName: "nrayan@jacobs-university.de",
    },
    {
      id: "9462eaad-4778-4a8e-a3ae-7922d679c11b",
      userPrincipalName: "omurtaj@jacobs-university.de",
    },
    {
      id: "07520c53-3114-42cb-9593-11379a74908e",
      userPrincipalName: "ecamsun@jacobs-university.de",
    },
    {
      id: "06019942-5cb3-41af-9861-19f0973e5126",
      userPrincipalName: "ybencheikh@jacobs-university.de",
    },
    {
      id: "c33a4751-2f5d-44e9-8a99-5feb7d2cf23c",
      userPrincipalName: "pboehnke@jacobs-university.de",
    },
    {
      id: "18107db5-4366-44d9-a519-f0d395a894da",
      userPrincipalName: "rmoussaid@jacobs-university.de",
    },
    {
      id: "61141fa3-672c-4b79-bfa1-2ed188643e3d",
      userPrincipalName: "aalazab@jacobs-university.de",
    },
    {
      id: "8662edc4-f206-40c5-97da-7bfb0efee12e",
      userPrincipalName: "aorynbekov@jacobs-university.de",
    },
    {
      id: "52f5291a-203f-4b1e-b0c2-e81eeea0280c",
      userPrincipalName: "sthapaliya@jacobs-university.de",
    },
    {
      id: "62a661b7-a1d5-421d-a917-10700c37f421",
      userPrincipalName: "ssaha@jacobs-university.de",
    },
    {
      id: "b03c5aa4-e49c-4f01-adb0-d7e32dfd0348",
      userPrincipalName: "smammadov@jacobs-university.de",
    },
    {
      id: "99df4c1c-85ba-45b1-bb07-cb37139dcaca",
      userPrincipalName: "astecher@jacobs-university.de",
    },
    {
      id: "407e2d9c-4a1b-48fa-8897-379d7781b501",
      userPrincipalName: "muhamin@jacobs-university.de",
    },
    {
      id: "76f3cd7f-dadb-4607-9c71-4ce09044195d",
      userPrincipalName: "alokaj@jacobs-university.de",
    },
    {
      id: "185ec17d-a041-4c39-8e44-0a39442cd0b9",
      userPrincipalName: "ekulla@jacobs-university.de",
    },
    {
      id: "0a2166cc-2eef-41c6-9e56-1bca0b4c9cfa",
      userPrincipalName: "oelhajhouj@jacobs-university.de",
    },
    {
      id: "995adcf5-6cd6-4819-a595-b6eb1ff3d730",
      userPrincipalName: "evide@jacobs-university.de",
    },
    {
      id: "5eaea574-ced4-492e-8791-ce6ac4b3b32d",
      userPrincipalName: "smwanza@jacobs-university.de",
    },
    {
      id: "03e70b13-d9bd-45ac-b734-830e2d6d4e98",
      userPrincipalName: "ngyurchev@jacobs-university.de",
    },
    {
      id: "b4e79438-da58-4766-9c9e-49dd47772629",
      userPrincipalName: "igiri@jacobs-university.de",
    },
    {
      id: "27c8a753-e0cb-4bfd-92e1-b4661de18754",
      userPrincipalName: "aadil@jacobs-university.de",
    },
    {
      id: "e1821054-486c-4c82-b730-27aa79dd3a54",
      userPrincipalName: "hsu@jacobs-university.de",
    },
  ];
  var CryptoJS = require("crypto-js");
  const [users, setUsers] = useState([]);

  const [usernameregister, setUsernameregister] = useState("");
  function onChangeusername(e) {
    setUsernameregister(e.target.value);
    reload();
  }
  const [passwordregister, setPasswordregister] = useState("");
  function onChangepassword(e) {
    setPasswordregister(e.target.value);
    reload();
  }

  const [email, setemail] = useState("");
  function onChangeemail(e) {
    setemail(e.target.value);
    reload();
  }
  const [Major, setMajor] = useState("default");
  function onChangemajor(e) {
    setMajor(e.target.value);
    reload();
  }

  const [Room, setRoom] = useState("default");
  function onChangeroom(e) {
    setRoom(e.target.value);
    reload();
  }
  const [Servers, setservers] = useState([]);
  async function reload() {
    let data = await get1("https://azertyha87.pythonanywhere.com/user");
    setUsers(data);
    let data1 = await get1("https://azertyha87.pythonanywhere.com/server");
    setservers(data1);
  }
  async function postit() {
    let data = await post1(
      "https://azertyha87.pythonanywhere.com/user",
      usernameregister,
      email.toLowerCase(),
      passwordregister,
      Major,
      Room
    );
  }
  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };
  async function onregister(emailj) {
    const rand = "randomizer";
    const encrypt = (content, randi) =>
      CryptoJS.AES.encrypt(JSON.stringify({ content }), randi).toString();

    if (!(usernameregister === "" || passwordregister === "" || email === "")) {
      var state = true;
      var state2 = true;
      var state3 = true;
      for (var i = 0; i < users.length; i++) {
        var obj = users[i];
        if (usernameregister === obj["Username"]) {
          state = false;
        }
        if (
          email.toLowerCase().replace(".", "") ===
          obj["Email"].toLowerCase().replace(".", "")
        ) {
          state2 = false;
        }
      }
      for (var i = 0; i < emailj.length; i++) {
        var obj = emailj[i].userPrincipalName;
        if (
          email.toLowerCase() === obj ||
          email.toLowerCase() ===
            obj.charAt(0).concat(".".concat(obj.substring(1)))
        ) {
          state3 = false;
        }
      }
      if (!state3) {
        if (state2) {
          if (state) {
            if (passwordregister.length >= 7) {
              if (passwordregister.length < 19) {
                if (hasNumber(passwordregister)) {
                  if (email.includes("@") && email.includes(".")) {
                    if (email.toLowerCase().includes("@jacobs-university.de")) {
                      postit();
                      setUsernameregister("");
                      setPasswordregister("");
                      setemail("");
                      setRoom("Default");
                      setMajor("Default");

                      var temp_id = -1;
                      for (var i = 0; i < users.length; i++) {
                        if (temp_id < users[i]["User_ID"]) {
                          temp_id = users[i].User_ID;
                        }
                      }
                      temp_id = temp_id + 1;
                      var servid = -1;
                      for (var i = 0; i < Servers.length; i++) {
                        if (Servers[i].Server_name === "Global") {
                          servid = Servers[i];
                          break;
                        }
                      }
                      await addusertoserver(
                        "https://azertyha87.pythonanywhere.com/server",
                        servid,
                        temp_id
                      );
                      if (Major !== "Default" || Room !== "Default") {
                        servid = -1;
                        if (Major !== "Default") {
                          for (var i = 0; i < Servers.length; i++) {
                            if (Servers[i].Server_name === Major) {
                              servid = Servers[i];
                              break;
                            }
                          }
                          if (servid !== -1) {
                            await addusertoserver(
                              "https://azertyha87.pythonanywhere.com/server",
                              servid,
                              temp_id
                            );
                          }
                        }
                        servid = -1;
                        if (Room !== "Default") {
                          for (var i = 0; i < Servers.length; i++) {
                            if (Servers[i].Server_name === Room) {
                              servid = Servers[i];
                              break;
                            }
                          }
                          if (servid !== -1) {
                            await addusertoserver(
                              "https://azertyha87.pythonanywhere.com/server",
                              servid,
                              temp_id
                            );
                          }
                        }
                      }
                      alert("Registred succesfully");
                      window.location = "/Login";
                    } else {
                      alert(
                        "You must be a Student at Jacobs University to register!"
                      );
                    }
                  } else {
                    alert("Email isn't valid");
                  }
                } else {
                  alert("Password doesn't contain a number");
                }
              } else {
                alert("Password too long");
                setPasswordregister("");
              }
            } else {
              alert("Password too short");
              setPasswordregister("");
            }
          } else {
            alert("Username Already used");
            setUsernameregister("");
          }
        } else {
          alert("you already have an Account.");
          alert(
            "Password recovery isn't set yet. Contact H.Bouhelal at jacobs-university.de for help"
          );
        }
      } else {
        alert("Email not valid, you are not a student at Jacobs University");
      }
    } else {
      alert("Enter the required fields");
    }
  }
  function hasNumber(myString) {
    return /\d/.test(myString);
  }
  return (
    <div>
      <Navbar />
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
                Register
              </h3>
              <h5 className="m-3 d-flex" style={{ color: "white" }}>
                Username *
              </h5>
              <input
                type="text"
                className="form-control"
                id="username"
                name="usernameregister"
                value={usernameregister}
                required
                onChange={onChangeusername}
              />
              <br />
              <h5 className="m-3 d-flex" style={{ color: "white" }}>
                Email *
              </h5>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                required
                onChange={onChangeemail}
              />
              <br />
              <h5 className="m-3 d-flex" style={{ color: "white" }}>
                Major *
              </h5>
              <select
                onChange={onChangemajor}
                value={Major}
                style={{
                  fontSize: 20,
                  height: 37,
                  width: 350,
                  alignItems: "center",
                }}
                required
              >
                <option value="Default">{""}</option>
                <option value="Computer science">Computer science</option>
                <option value="IEM">IEM</option>
                <option value="Mathematics">Mathematics</option>
                <option value="ECE">ECE</option>
                <option value="BCCB">BCCB</option>
                <option value="Chemistry">Chemistry</option>
                <option value="MCCB">MCCB</option>
                <option value="Earth Sciences">Earth Sciences</option>
                <option value="Physics">Physics</option>
                <option value="GEM">GEM</option>
                <option value="IBA">IBA</option>
                <option value="SMP">SMP</option>
                <option value="Social Sciences">Social Sciences</option>
                <option value="IRPH">IRPH</option>
                <option value="ISCP">ISCP</option>
                <option value="Psychology">Psychology</option>
              </select>
              <br />
              <h5 className="m-3 d-flex" style={{ color: "white" }}>
                College *
              </h5>
              <select
                onChange={onChangeroom}
                value={Room}
                style={{
                  fontSize: 20,
                  height: 37,
                  width: 350,
                  alignItems: "center",
                }}
                required
              >
                <option value="Default">{""}</option>
                <option value="Mercator">Mercator</option>
                <option value="College 3">College 3</option>
                <option value="Krupp">Krupp</option>
                <option value="Nordmetall">Nordmetall</option>
                <option value="Default">Off Campus</option>
              </select>
              <br />
              <h5 className="m-3 d-flex" style={{ color: "white" }}>
                Password *
              </h5>
              <input
                type="password"
                className="form-control"
                id="password"
                name="passwordregister"
                value={passwordregister}
                required
                onChange={onChangepassword}
              />
              <br />
              <PasswordChecklist
                rules={["minLength", "maxLength", "number"]}
                minLength={7}
                maxLength={18}
                value={passwordregister}
                onChange={(isValid) => {}}
              />
              <br />
              <button
                type="button"
                className="btn btn-primary "
                onClick={() => onregister(emails)}
              >
                Register
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
      <Footer />
    </div>
  );
};

export default Register;
