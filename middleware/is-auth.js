module.exports = (req, res, next) => {
  if (!req.body.isLoggedIn) {
    res.redirect("/login");
  }
  next();
};
