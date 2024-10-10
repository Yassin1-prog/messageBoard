const express = require("express");
const app = express();
const path = require("node:path");
const getGiph = require("./controllers/getGiph");
const newRouter = require("./routes/newRouter");
const db = require("./db/queries");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use("/new", newRouter);

app.get("/", async (req, res) => {
  const messages = await db.getAllMessages();
  res.render("index", { messages: messages });
});

app.get("/details", getGiph.putGiph);

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Initiallizing app - listening on port ${PORT}!`)
);
