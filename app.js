const express = require("express");
const ejs = require("ejs");
const path = require("path");
const dotenv = require("dotenv");

const app = express();

dotenv.config();

//미들웨어
app.use(express.json());

//라우트 설정
const indexRoutes = require("./src/routes/index.route");

//라우트 미들웨어
app.use(indexRoutes);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views/ejs"));

app.listen(process.env.PORT, "0.0.0.0", () => {
  console.log(`listening on port ${process.env.PORT}`)
})