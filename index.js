const express = require("express");
const app = express();
const path = require("node:path");
const parShare = require("./controllers/parShare");
const getGiph = require("./controllers/getGiph");
const newRouter = require("./routes/newRouter");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
  {
    text: "One must imagine Sisylius happy.",
    user: "Popo Hamza",
    added: new Date(),
  },
];

app.use(parShare.passMessage(messages));

app.use(express.urlencoded({ extended: true }));
app.use("/new", newRouter);

app.get("/", (req, res) => {
  res.render("index", { messages: messages });
});

app.get("/details", getGiph.putGiph);

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Initiallizing app - listening on port ${PORT}!`)
);
