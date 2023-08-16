const {ID, Client, Databases, Account} = require('appwrite');

const client = new Client();

const account = new Account(client);

if(!process.env.NODE_ENV || process.env.NODE_ENV !== "production"){
  import dotenv from "dotenv";
  const config = dotenv.config().parsed();
}else{
  const config = process.env
}

client.setEndpoint(config.endpoint)
      .setProject(config.projectID);

function createAcc(email, pass){
  let result;
  account.create(
    ID.unique(),
    email,
    pass
  ).then(function (res){
    result = res
  })
  return result;
};

const newAccB = document.querySelector("#newAccB");

newAccB.onsubmit = (e) => {
  e.preventDefault();
  if(document.querySelector("input[name=psw-repeat]").value !== document.querySelector("input[name=psw]").value){
    return alert("Both passwords must match");
  };
  let passw = document.querySelector("input[name=psw]").value;
  let email = document.querySelector("input[name=email]").value;

  createAcc(email, passw).then(function (resp){
   localstorage.set("user", {
     id: resp["$id"]
   });
   alert("A Verification Link Has Been Sent to your email");
   account.createMagicURLSession(resp["$id"], email).then(function (resp){
     account.updateMagicURLSession(resp.userId, resp.secret).then(function (resa){
       localstorage.set("user", resa);
       window.url.href = "/";
     });
   });
  });
};

