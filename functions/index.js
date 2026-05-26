const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

exports.login = functions.https.onRequest((req, res) => {
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  const { username, password } = req.body;

  // Securely check credentials
  if (username === "kuce_connect" && password === "korea1905") {
    res.status(200).json({ success: true, message: "Login successful!" });
  } else {
    res.status(401).json({ success: false, message: "Invalid username or password." });
  }
});
