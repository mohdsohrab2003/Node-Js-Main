exports.getLogin = (req, res, next) => {
  res.render("auth/Login", { title: "Login", isLoggedIn: false });
};

exports.postLogin = (req, res, next) => {
  req.session.isLoggedIn = true; // Set session variable

  res.redirect("/");
};

exports.PreventLogin = (req, res, next) => {
  if (req.path === "/" || req.path === "/login") {
    return next();
  }
  if (req.isLoggedIn) {
    next();
  } else {
    return res.redirect("/login");
  }
};
exports.getLogout = (req, res, next) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
};
