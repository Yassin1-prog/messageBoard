const passMessage = (messages) => {
  return (req, res, next) => {
    req.messages = messages;
    next();
  };
};

module.exports = { passMessage };
