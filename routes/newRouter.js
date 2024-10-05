const { Router } = require("express");

const newRouter = Router();

newRouter.get("/", (req, res) => {
  res.render("addnew");
});

newRouter.post("/", (req, res) => {
  let textMessage = req.body.text;
  let user = req.body.name;
  req.messages.push({ text: textMessage, user: user, added: new Date() });
  res.redirect("/");
});

module.exports = newRouter;
