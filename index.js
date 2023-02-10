const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send({ response: "hello from server" });
});

app.listen(PORT, () => {
  console.log(`SERVER IS LISTNING ${PORT}`);
});
