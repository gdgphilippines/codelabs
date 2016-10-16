var firebase = require("firebase");

firebase.initializeApp({
  serviceAccount: "/auth.json",
  databaseURL: "https://gdg-devfest-philippines-2016.firebaseio.com"
});

// As an admin, the app has access to read and write all data, regardless of Security Rules
var db = firebase.database();
var ref = db.ref("codelabs");
ref.once("value", function(snapshot) {
  console.log(snapshot.val());
});