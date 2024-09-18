const AuthenticationMiddleware = (req, res, next) => {
  let user = req.query.user;

  if (user == "valuelabs") {
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};

module.exports = {AuthenticationMiddleware};