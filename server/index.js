const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const http = require("http");
const path = require("path");
const HandelJSON = require("./HandelJSON");

const app = express();
const server = http.createServer(app);
app.use(cors());
app.use(bodyParser.json());
console.log({ x: path.resolve("./data.json") });
const handel = new HandelJSON(path.resolve("./data.json"));
app.use("/message", async (req, res) => {
  return res.json({ message: "hello world" });
});

app.get("/register", async (_, res) => {
  const json = await handel.get();
  json.visits++;
  await handel.set({ ...json, visits: json.visits });
  return res.json({ visits: json.visits });
});

server.listen(process.env.PORT, async () => {
  console.log(`app running at http://${process.env.HOST}`);
});
