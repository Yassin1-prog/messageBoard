const { Router } = require("express");
const db = require("../db/queries");

const newRouter = Router();

newRouter.get("/", (req, res) => {
  res.render("addnew");
});

newRouter.post("/", async (req, res) => {
  const { username, text } = req.body;
  await db.addMessage({ username, text });
  res.redirect("/");
});

module.exports = newRouter;
