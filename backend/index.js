const express = require("express");
const cors = require("cors");
const server = express();
require("dotenv").config();

server.use(
  cors({
    origin: process.env.LOCAL_HOST,
    methods: ["GET", "POST"],
  })
);

const promptRoute = require("./routes/Prompt");
server.use("/", promptRoute);

server.listen(process.env.PORT, () => {
  console.log(`Server is running on port: ${process.env.PORT}`);
});
